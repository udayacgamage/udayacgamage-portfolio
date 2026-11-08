"use client";

import { useEffect, useState } from "react";

type NodeId = "sensor" | "broker" | "client";

interface TelemetryData {
  sensorId: string;
  vibrationHz: number;
  loadKn: number;
  temperatureC: number;
  batteryPct: number;
  latencyMs: number;
  packetsSent: number;
  status: "NORMAL" | "ALERT" | "TRANSMITTING";
  topic: string;
  qos: number;
}

export default function NetworkFlowSimulator() {
  const [activeNode, setActiveNode] = useState<NodeId>("broker");
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [packetProgress, setPacketProgress] = useState<number>(0);
  const [isAlertState, setIsAlertState] = useState<boolean>(false);
  const [lastLog, setLastLog] = useState<string>("MQTT PUBLISH payload dispatched to broker");

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    sensorId: "ESP32-NODE-04",
    vibrationHz: 12.4,
    loadKn: 41.2,
    temperatureC: 28.5,
    batteryPct: 94,
    latencyMs: 18,
    packetsSent: 142,
    status: "NORMAL",
    topic: "telemetry/bridge/pier-03",
    qos: 1,
  });

  // Packet animation loop
  useEffect(() => {
    if (!isRunning) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress = (progress + 2) % 100;
      setPacketProgress(progress);

      // On each loop completion, update random sensor telemetry slightly
      if (progress === 0) {
        setTelemetry((prev) => {
          if (isAlertState) {
            return {
              ...prev,
              packetsSent: prev.packetsSent + 1,
              vibrationHz: Number((45 + Math.random() * 8).toFixed(1)),
              loadKn: Number((82 + Math.random() * 5).toFixed(1)),
              latencyMs: Math.floor(14 + Math.random() * 10),
              status: "ALERT",
            };
          }
          return {
            ...prev,
            packetsSent: prev.packetsSent + 1,
            vibrationHz: Number((11 + Math.random() * 2.8).toFixed(1)),
            loadKn: Number((39 + Math.random() * 4).toFixed(1)),
            temperatureC: Number((28 + Math.random() * 1.2).toFixed(1)),
            latencyMs: Math.floor(12 + Math.random() * 14),
            status: "NORMAL",
          };
        });
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isRunning, isAlertState]);

  const triggerAlertSimulation = () => {
    setIsAlertState(true);
    setLastLog("ALERT: Vibration threshold exceeded (>45Hz). Dispatching push notification.");
    setTimeout(() => {
      setIsAlertState(false);
      setLastLog("Normal telemetry stream resumed (vibration settled at ~12Hz).");
    }, 4500);
  };

  const publishManualPacket = () => {
    setTelemetry((prev) => ({
      ...prev,
      packetsSent: prev.packetsSent + 1,
      latencyMs: Math.floor(10 + Math.random() * 8),
    }));
    setLastLog(`MANUAL: Ping frame acknowledged in ${Math.floor(10 + Math.random() * 8)}ms.`);
  };

  return (
    <div className="network-topology-interactive">
      <div className="simulator-header">
        <div>
          <span className="eyebrow">BRIDGEM / LIVE TELEMETRY SIMULATOR</span>
          <div className="status-indicator">
            <span
              className={`status-dot ${isAlertState ? "alert" : isRunning ? "active" : "paused"}`}
            />
            <span className="status-text">
              {isAlertState
                ? "SIMULATION: ANOMALY SPIKE"
                : isRunning
                  ? "SYSTEM ONLINE (MQTT / WSS)"
                  : "STREAM PAUSED"}
            </span>
          </div>
        </div>
        <div className="simulator-controls">
          <button
            type="button"
            className="sim-btn"
            onClick={() => setIsRunning(!isRunning)}
            title={isRunning ? "Pause stream" : "Resume stream"}
          >
            {isRunning ? "⏸ Pause" : "▶ Resume"}
          </button>
          <button
            type="button"
            className="sim-btn"
            onClick={publishManualPacket}
            title="Publish single telemetry packet"
          >
            ⟳ Ping
          </button>
          <button
            type="button"
            className={`sim-btn ${isAlertState ? "sim-btn-alert" : ""}`}
            onClick={triggerAlertSimulation}
            title="Simulate high-load bridge alert"
          >
            ⚡ Test Alert
          </button>
        </div>
      </div>

      {/* Interactive Flow Nodes */}
      <div className="network-flow-canvas">
        {/* Animated packet tracking bar */}
        <div className="flow-track-line" aria-hidden="true">
          <div
            className={`packet-pulse ${isAlertState ? "packet-pulse-alert" : ""}`}
            style={{
              left: `${packetProgress}%`,
              opacity: isRunning ? 1 : 0.3,
            }}
          />
        </div>

        {/* Node 1: Sensor */}
        <button
          type="button"
          onClick={() => setActiveNode("sensor")}
          className={`flow-node-btn ${activeNode === "sensor" ? "is-selected" : ""}`}
          aria-pressed={activeNode === "sensor"}
        >
          <span className="flow-node-icon" aria-hidden="true">
            ◉
          </span>
          <strong>Sensor Data</strong>
          <small>Bridge strain gauge (ESP32)</small>
          <span className="node-chip">{telemetry.vibrationHz} Hz</span>
        </button>

        <span className="flow-arrow-interactive" aria-hidden="true">
          →
        </span>

        {/* Node 2: MQTT Broker */}
        <button
          type="button"
          onClick={() => setActiveNode("broker")}
          className={`flow-node-btn ${activeNode === "broker" ? "is-selected" : ""}`}
          aria-pressed={activeNode === "broker"}
        >
          <span className="flow-node-icon" aria-hidden="true">
            ⌘
          </span>
          <strong>MQTT Broker</strong>
          <small>Pub/Sub & WebSocket Proxy</small>
          <span className="node-chip">{telemetry.latencyMs}ms QoS {telemetry.qos}</span>
        </button>

        <span className="flow-arrow-interactive" aria-hidden="true">
          →
        </span>

        {/* Node 3: Dashboard */}
        <button
          type="button"
          onClick={() => setActiveNode("client")}
          className={`flow-node-btn ${activeNode === "client" ? "is-selected" : ""}`}
          aria-pressed={activeNode === "client"}
        >
          <span className="flow-node-icon" aria-hidden="true">
            ▥
          </span>
          <strong>Mobile App</strong>
          <small>React Native + Expo</small>
          <span className={`node-chip ${isAlertState ? "chip-alert" : "chip-normal"}`}>
            {isAlertState ? "⚠ High Stress" : "✓ Safe (41kN)"}
          </span>
        </button>
      </div>

      {/* Live Node Inspector / Diagnostics */}
      <div className="node-inspector">
        <div className="inspector-top">
          <div className="inspector-title">
            <span className="eyebrow">ACTIVE INSPECTOR:</span>
            <strong>
              {activeNode === "sensor" && "Sensor Array Node (ESP32 / LoRaWAN)"}
              {activeNode === "broker" && "Mosquitto / EMQX MQTT Broker Cluster"}
              {activeNode === "client" && "BridgeM Mobile Client (WebSocket wss://)"}
            </strong>
          </div>
          <span className="packet-badge">
            Packets processed: <strong>{telemetry.packetsSent}</strong>
          </span>
        </div>

        <div className="inspector-grid">
          {activeNode === "sensor" && (
            <>
              <div className="metric-box">
                <span className="metric-label">Vibration Frequency</span>
                <span className={`metric-val ${isAlertState ? "val-alert" : ""}`}>
                  {telemetry.vibrationHz} <small>Hz</small>
                </span>
                <span className="metric-sub">Accelerometer 3-axis</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Load / Strain</span>
                <span className={`metric-val ${isAlertState ? "val-alert" : ""}`}>
                  {telemetry.loadKn} <small>kN</small>
                </span>
                <span className="metric-sub">Span Pier 03</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Ambient Temp</span>
                <span className="metric-val">
                  {telemetry.temperatureC} <small>°C</small>
                </span>
                <span className="metric-sub">Thermal expansion check</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Battery Level</span>
                <span className="metric-val">
                  {telemetry.batteryPct} <small>%</small>
                </span>
                <span className="metric-sub">Solar harvester active</span>
              </div>
            </>
          )}

          {activeNode === "broker" && (
            <>
              <div className="metric-box">
                <span className="metric-label">MQTT Topic</span>
                <span className="metric-val text-mono">{telemetry.topic}</span>
                <span className="metric-sub">QoS Level: 1 (At least once)</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Round-Trip Latency</span>
                <span className="metric-val">
                  {telemetry.latencyMs} <small>ms</small>
                </span>
                <span className="metric-sub">Jitter: &lt; 3.4ms</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Transport Security</span>
                <span className="metric-val text-accent">TLS 1.3 / AES-256</span>
                <span className="metric-sub">MQTTS Port: 8883 / 8084 (WSS)</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Payload Format</span>
                <span className="metric-val">JSON Compact</span>
                <span className="metric-sub">Avg frame size: 184 bytes</span>
              </div>
            </>
          )}

          {activeNode === "client" && (
            <>
              <div className="metric-box">
                <span className="metric-label">Client Framework</span>
                <span className="metric-val">React Native / Expo</span>
                <span className="metric-sub">WebSocket listener live</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Bridge Safety Status</span>
                <span className={`metric-val ${isAlertState ? "val-alert" : "val-success"}`}>
                  {isAlertState ? "ANOMALY (LEVEL 2)" : "NORMAL OPERATION"}
                </span>
                <span className="metric-sub">Threshold: 45.0 Hz</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Telemetry Pipeline</span>
                <span className="metric-val">Real-time Stream</span>
                <span className="metric-sub">Zero polling, pure push</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Alert Dispatch</span>
                <span className="metric-val">
                  {isAlertState ? "Pushing to Crew" : "Standby"}
                </span>
                <span className="metric-sub">Expo Push Notification</span>
              </div>
            </>
          )}
        </div>

        <div className="inspector-footer">
          <span className="log-prefix">STREAM LOG &gt;</span>
          <span className="log-content">{lastLog}</span>
        </div>
      </div>
    </div>
  );
}

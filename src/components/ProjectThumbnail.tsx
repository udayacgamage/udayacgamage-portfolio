type Props = { project: string; name: string };

// Original interface illustrations, not screenshots or live project data.
export default function ProjectThumbnail({ project, name }: Props) {
  const mobile = project === "UCHAT-app" || project === "Frame-social-media-app" || project === "Ceylona";
  return (
    <div className={`project-thumbnail thumbnail-${project}`}>
      <svg viewBox="0 0 640 360" role="img" aria-label={`${name} interface concept illustration`}>
        <g className="thumbnail-interface">
          <rect x={mobile ? 208 : 54} y="40" width={mobile ? 224 : 532} height="300" rx={mobile ? 26 : 12} fill="#141e25" stroke="#ffffff30" />
          <text x={mobile ? 230 : 78} y="73" fill="#edf4f5" fontSize="13" fontFamily="sans-serif" fontWeight="600">{name}</text>
          <circle cx={mobile ? 406 : 560} cy="68" r="5" fill="currentColor" />
          <path d={mobile ? "M224 90H416" : "M70 90H570"} stroke="#ffffff18" />
          {project === "Ceylona" && <>
            <text x="230" y="115" className="thumbnail-label">YOUR SRI LANKA JOURNEY</text>
            <rect x="228" y="133" width="184" height="135" rx="8" fill="#25473e" />
            <path d="M228 170L412 220 M260 133L300 268 M228 240L412 155 M360 133L345 268" stroke="#ffffff15" strokeWidth="7" />
            <path d="M260 235Q355 230 318 186T378 155" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 5" />
            {[[260,235],[318,186],[378,155]].map(([x,y]) => <g key={x}><circle cx={x} cy={y} r="9" fill="currentColor" /><circle cx={x} cy={y} r="3" fill="#141e25" /></g>)}
            <rect x="228" y="282" width="184" height="35" rx="8" fill="currentColor" opacity=".85" />
            <text x="252" y="304" fill="#141e25" fontSize="10" fontFamily="sans-serif">PLAN YOUR ITINERARY ↗</text>
          </>}
          {project === "cloud-path" && <>
            <text x="80" y="119" className="thumbnail-label">NETWORK TOPOLOGY</text>
            <path d="M160 204L320 151L478 204L320 272Z M160 204H478 M320 151V272" stroke="currentColor" strokeOpacity=".45" strokeWidth="2" fill="none" />
            {[[160,204],[320,151],[478,204],[320,272]].map(([x,y], i) => <g key={i}>
              <rect x={x-26} y={y-22} width="52" height="44" rx="12" fill="#243c43" stroke="currentColor" />
              <path d={`M${x-10} ${y}h20 M${x} ${y-10}v20`} stroke="currentColor" strokeWidth="2" />
              <circle cx={x+17} cy={y-14} r="3" fill="currentColor" />
            </g>)}
            <circle className="thumbnail-packet" cx="240" cy="204" r="5" fill="currentColor" />
            <text x="80" y="318" className="thumbnail-label">ROUTING LAB / 04 NODES</text>
          </>}
          {project === "IOT-bridge-app" && <>
            {[[80,"LOAD"],[247,"VIBRATION"],[414,"SENSORS"]].map(([x,label]) => <g key={label}>
              <rect x={x} y="110" width="145" height="62" rx="8" fill="#ffffff08" />
              <text x={Number(x)+12} y="131" className="thumbnail-label">{label}</text>
              <rect x={Number(x)+12} y="146" width="56" height="8" rx="4" fill="currentColor" opacity=".7" />
            </g>)}
            {[200,230,260,290].map(y => <path key={y} d={`M80 ${y}H558`} stroke="#ffffff10" />)}
            <path className="thumbnail-signal" d="M80 260L110 250L140 263L174 222L200 240L228 233L256 260L282 192L309 229L335 216L362 247L390 226L420 238L450 197L478 220L510 208L558 186" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <text x="80" y="318" className="thumbnail-label">SENSOR TELEMETRY / MQTT</text>
          </>}
          {project === "UCHAT-app" && <>
            <text x="230" y="116" className="thumbnail-label">TEAM CONVERSATION</text>
            {[142,196,250].map((y,i) => <g key={y}>
              <rect x={i===1 ? 264 : 230} y={y} width="144" height="40" rx="12" fill={i===1 ? "currentColor" : "#ffffff12"} opacity={i===1 ? ".85" : "1"} />
              <path d={`M${i===1 ? 278 : 244} ${y+15}h94 m-94 10h62`} stroke={i===1 ? "#141e25" : "#9caeb9"} strokeWidth="3" strokeLinecap="round" />
            </g>)}
            <rect x="230" y="306" width="148" height="12" rx="6" fill="#ffffff12" /><circle cx="398" cy="312" r="8" fill="currentColor" />
          </>}
          {project === "Frame-social-media-app" && <>
            {[242,282,322,362,402].map(x => <circle key={x} cx={x} cy="116" r="13" fill="#ffffff10" stroke="currentColor" strokeWidth="2" />)}
            <rect x="228" y="143" width="184" height="135" rx="8" fill="#34545b" />
            <circle cx="365" cy="174" r="17" fill="#eacb9a" />
            <path d="M228 256L281 191L334 252L368 216L412 268V278H228Z" fill="#92b6aa" />
            <path d="M242 295h14m-7-7v14 M272 295h64 M242 316h110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </>}
          {project === "lens-loop" && <>
            <text x="80" y="121" className="thumbnail-label">EXPLORE EQUIPMENT</text>
            {[80,244,408].map((x,i) => <g key={x}>
              <rect x={x} y="141" width="148" height="156" rx="8" fill="#ffffff08" />
              <rect x={x+22} y="176" width="104" height="66" rx="9" fill="#33414b" stroke="#ffffff20" />
              <rect x={x+35} y="166" width="30" height="14" rx="4" fill="#33414b" />
              <circle cx={x+79} cy="209" r={i===1 ? 30 : 24} fill="#141e25" stroke="currentColor" strokeWidth="3" />
              <circle cx={x+79} cy="209" r="12" fill="currentColor" opacity=".35" />
              <path d={`M${x+16} 268h78 m-78 12h48`} stroke="#9caeb9" strokeWidth="3" strokeLinecap="round" />
            </g>)}
            <text x="80" y="320" className="thumbnail-label">DISCOVER / RESERVE / CREATE</text>
          </>}
          {project === "pool-management-system" && <>
            <text x="80" y="120" className="thumbnail-label">LANE RESERVATIONS</text>
            {[0,1,2,3].map(row => <g key={row}>
              <text x="80" y={157+row*42} className="thumbnail-label">0{row+1}</text>
              {[0,1,2,3,4,5].map(col => <rect key={col} x={119+col*74} y={140+row*42} width="64" height="28" rx="5" fill={(row+col)%3===0 ? "currentColor" : "#ffffff0c"} opacity={(row+col)%3===0 ? ".75" : "1"} />)}
            </g>)}
            <circle cx="86" cy="320" r="4" fill="currentColor" /><text x="100" y="323" className="thumbnail-label">BOOKINGS / WEEKLY OVERVIEW</text>
          </>}
        </g>
      </svg>
      <span className="thumbnail-caption">Interface concept</span>
      <span className="thumbnail-open" aria-hidden="true">Explore project ↗</span>
    </div>
  );
}

# Udaya Chathuranga — Portfolio

A responsive Next.js portfolio focused on networking, cyber security, and connected systems, with an ivory-and-forest visual identity, project filtering, mobile navigation, and accessible contact links.

## Development

- `npm ci` — install the locked dependencies.
- `npm run dev` — start the local development server.
- `npm run build` — create the production build.
- `npm start` — serve the production build.

## Content

Page content: `src/app/page.tsx`. Project data and filters: `src/components/Projects.tsx`. Visual styles: `src/app/globals.css`. Search and social metadata: `src/app/layout.tsx`.

Featured project descriptions were reviewed against public GitHub READMEs on 2026-11-08:

- https://github.com/udayacgamage/lens-loop
- https://github.com/udayacgamage/pool-management-system
- https://github.com/udayacgamage/cloud-path
- https://github.com/udayacgamage/IOT-bridge-app
- https://github.com/udayacgamage/UCHAT-app
- https://github.com/udayacgamage/Frame-social-media-app (package manifest and application source)

Cloudpath and BridgeM lead the project collection. UCHAT and Frame showcase mobile development. The BridgeM communication flow illustrates its documented MQTT/WebSocket architecture; it is not live telemetry. Networking and security topics are presented as areas of study, without implying certifications or production network deployments.

Profile and toolkit details reference https://github.com/udayacgamage/udayacgamage. Project artwork is an original graphic representation, not a product screenshot. Repository descriptions do not imply independent production verification.

## Deployment

The existing hosting target is Vercel. Keep the project configured with the Next.js framework preset and the repository root as its root directory. This app needs no environment variables. Legacy root HTML files are not the Next.js entry point.

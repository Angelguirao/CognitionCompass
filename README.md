# Cognitive Compass

## Overview
**Cognitive Compass** is a comprehensive, interconnected digital system designed to enhance thinking, learning, and awareness. It helps users explore diverse perspectives, abstract ideas, and connect deeply with themselves, others, and the broader world. The project aligns with a philosophy of life that prioritizes connection, ethical awareness, and meaningful engagement with information.

The system aims to:
1. **Process** and abstract input data (e.g., text, audio, image, video).
2. **Structure** knowledge into a dynamic knowledge graph.
3. **Expand awareness** by suggesting alternative perceptions and perspectives.
4. **Support reflection** to guide daily focus, projects, and personal growth.

The design mirrors **the brain’s parallel processes**, running focused tasks, background awareness, and pattern recognition asynchronously using **serverless architecture** and modular microservices.

---

## What is the Cognitive Compass?
The Cognitive Compass is a modular, decentralized, and personal tool that:

- Acts as a meta-structure for organizing unstructured data (thoughts, feelings, experiences) into meaningful, interconnected knowledge.
- Serves as a framework that evolves alongside any worldview, philosophy, or cognitive model, ensuring flexibility and adaptability.
- Empowers others to do the same, providing a customizable structure while keeping data ownership and autonomy at the core.

It bridges the gap between personal knowledge management and public sharing, allowing users to explore their inner world while fostering meaningful connections with others.

---

## Core Features and Philosophy

### 1. Framework-Agnostic Design
- Users can configure the Cognitive Compass to align with any thinking, feeling, or sensing framework, such as systems thinking, psychological models, or artistic perspectives.
- Provides templates for common frameworks (e.g., values-based models) but allows complete customization.

### 2. Self-Hosted with Privacy First
- Users can run the Cognitive Compass locally (on their own devices) or on private servers.
- Data is fully owned and controlled by the user, aligning with principles of privacy and autonomy.
- Processing is handled locally to avoid reliance on third-party cloud providers unless explicitly configured.
- All data is encrypted at rest and in transit, ensuring maximum security and privacy.
- Optional **secure serverless processing** (e.g., AWS Lambda) can be enabled, ensuring data is encrypted before sending and no raw data is stored on external servers.

### 3. User-Centric Knowledge Management
- Abstracts and organizes raw data (news, conversations, ideas) into meaningful structures.
- Enables users to reflect on experiences and discover new perspectives through dynamic visualization.

### 4. Decentralized, Yet Interconnected
- Every user builds their own Cognitive Compass independently.
- Optional federation allows for connections, knowledge sharing, and collective reflection while respecting individuality.

### 5. Dynamic Map of Consciousness
- A meta-tool for exploring states of consciousness, mapping attention, and reflecting on values, emotions, and perspectives.
- Encourages alignment between thinking, feeling, and sensing with intentional action.

---

## What Does It Do?

### 1. Abstracts Raw Inputs
- Processes news, ideas, books, conversations, and sensory experiences into structured knowledge.

### 2. Organizes Data Agnostically
- Supports any framework for connecting concepts, values, or other relevant structures.

### 3. Suggests Alternative Perspectives
- Encourages self-reflection and offers ways to explore experiences from different viewpoints.

### 4. Facilitates Ethical Connection
- Builds deeper connections with people, nature, and the universe through meaningful information sharing.

### 5. Navigates Attention
- Supports mindful focus by mapping priorities, attention modes, and thought patterns.

---

## Public Digital Garden
The Cognitive Compass includes an optional **digital garden** feature, allowing users to share selected parts of their knowledge graph with the public.

### How It Works:
1. **Mark Nodes as Public:**
   - Tag reflections or ideas you want to share with `isPublic: true`.

2. **Public API:**
   - Exposes public thoughts through a secure, read-only API (`/api/public-thoughts`).

3. **Interactive Visualization:**
   - Visitors explore shared knowledge interactively using tools like **Cytoscape.js** or **D3.js**.

4. **Self-Hosted or Static Hosting:**
   - Serve the digital garden as part of your Cognitive Compass app or export it as a static site.

---

## System Design Parallels: Brain vs. Cognitive Compass
Inspired by the brain's dynamic processes, Cognitive Compass implements the following:

### 1. Distributed Processing
- **Brain**: Different areas handle specialized tasks (e.g., sensory processing, memory, emotions) but communicate and integrate seamlessly.
- **System Design**: Use modular architecture where different components (e.g., Memory Consolidation, Pattern Recognition, Emotion Analysis) operate independently but exchange data through well-defined interfaces (e.g., APIs, message queues).

### 2. Parallel and Asynchronous Processing
- **Brain**: Processes occur simultaneously (e.g., sensory input, motor response, and internal reflection).
- **System Design**:
  - Implement event-driven architecture using asynchronous processing frameworks like Node.js.
  - Use worker threads or microservices to handle tasks like data ingestion, consolidation, and pattern recognition concurrently.
  - Example: A background service running periodic memory consolidation while another asynchronous service analyzes patterns.

### 3. Hierarchical Organization
- **Brain**: Layers of abstraction exist, from raw sensory data to high-level insights and decisions.
- **System Design**:
  - Create a layered architecture:
    - **Input Layer**: Ingest raw data (e.g., text, images, metrics).
    - **Processing Layer**: Normalize, tag, and structure data.
    - **Insight Layer**: Apply pattern recognition and abstraction.
    - **Action Layer**: Generate recommendations or visualizations.
  - Example: Use an ETL (Extract, Transform, Load) pipeline for data processing.

### 4. Memory and State Management
- **Brain**: The hippocampus consolidates short-term memories into long-term storage, while the neocortex retrieves and analyzes them.
- **System Design**:
  - Use stateful services to track short-term data (e.g., Redis for caching) and databases for long-term storage (e.g., MongoDB).
  - Include periodic triggers (e.g., cron jobs or event-based triggers) to consolidate recent data into structured formats.

### 5. Feedback Loops
- **Brain**: Uses feedback loops to refine understanding (e.g., learning from mistakes or adapting to new information).
- **System Design**:
  - Incorporate machine learning models to analyze past data and adapt system behavior.
  - Use feedback APIs to let users validate or modify insights, improving future performance.

### 6. Default Mode Network (Background Processes)
- **Brain**: The DMN processes patterns and generates insights during idle states.
- **System Design**:
  - Implement background services that run during low system load to identify deeper patterns.
  - Use locally hosted scheduled tasks (e.g., Node.js Cron, Agenda.js) to periodically scan historical data for recurring themes.
  - For optional serverless patterns, ensure all data is encrypted before transmission and not stored in external logs.

### 7. Context Awareness
- **Brain**: Adjusts focus based on context (e.g., fight-or-flight response vs. deep reflection).
- **System Design**:
  - Use context-aware processing by tagging inputs with metadata (e.g., time, location, emotional state).
  - Apply rule-based systems or locally hosted ML models to prioritize insights based on the user's current focus.

### 8. Resilience and Redundancy
- **Brain**: Built-in redundancy ensures functionality even after localized damage.
- **System Design**:
  - Use fault-tolerant architecture, such as database replication, load balancing, and service redundancy.
  - Implement health checks to monitor system components and failover mechanisms to handle unexpected failures.

### 9. Time-Based Cycles
- **Brain**: Operates on cycles like circadian rhythms and sleep stages.
- **System Design**:
  - Use scheduling mechanisms for tasks that mimic these cycles (e.g., hourly data analysis, daily reflections).
  - Example: Use tools like Bull.js or Agenda.js for scheduling periodic tasks, ensuring everything runs on self-hosted infrastructure.

### 10. Multi-Modal Integration
- **Brain**: Combines sensory data, emotions, and memories into a cohesive understanding.
- **System Design**:
  - Support multi-modal input processing (e.g., text, audio, images) using JavaScript libraries or APIs.
  - Implement data fusion techniques to merge diverse data sources into a unified knowledge graph.

---

## Proposed Architecture for Cognitive Compass

### 1. Input Layer
- **Components**: Data ingestion (API endpoints, file uploads).
- **Technologies**: Express.js or Koa.js (Node.js).

### 2. Processing Layer
- **Components**: 
  - Data normalization (cleaning and tagging inputs).
  - Short-term memory storage.
- **Technologies**: Redis (caching), Kafka (streaming).

### 3. Storage Layer
- **Components**: 
  - Structured storage (consolidated data).
  - Historical storage (raw data).
- **Technologies**: MongoDB (structured memory), local filesystem (raw data).

### 4. Pattern Recognition Layer
- **Components**: 
  - Background services for asynchronous analysis.
  - ML models for pattern detection.
- **Technologies**: TensorFlow.js or Node.js worker threads for analysis.

### 5. Insight Layer
- **Components**: 
  - Generate actionable insights.
  - Visualizations and recommendations.
- **Technologies**: D3.js (visualizations), React.js (frontend).

### 6. Output Layer
- **Components**: 
  - Dashboards, notifications, reports.
- **Technologies**: Webhooks, email services, or Slack integration.

---

## Data Models
Cognitive Compass employs a **flexible data model** to structure user experiences:

### Core Models:
1. **Framework Model**
   - Abstract structure for user-defined or pre-configured frameworks.
   - Fields: `Name`, `Sub-Models`, `Connections`.

2. **Experience Model**
   - Tracks active focus and related elements (values, traits, etc.).
   - Fields: `Content ID`, `Active Elements`, `Attention Intensity`.

### Background Models:
1. **Raw Sensory Input Model**
   - Captures sensory inputs (images, sounds, text).
   - Fields: `Timestamp`, `Sensory Type`, `Raw Data`.

2. **Emotion Log Model**
   - Records emotions linked to content.
   - Fields: `Timestamp`, `Emotion Type`, `Intensity`, `Linked Elements`.

3. **Background Thought Model**
   - Logs fleeting thoughts.
   - Fields: `Thought Text`, `Timestamp`, `Associated Elements`.

### Reflective Models:
1. **Pattern Recognition Model**
   - Identifies recurring themes and emotional triggers.
   - Fields: `Pattern Type`, `Description`, `Trigger Count`.

2. **Memory Consolidation Model**
   - Summarizes experiences into structured reflections.
   - Fields: `Event Summary`, `Core Elements`, `Reflection`.

---

## Workflow
1. **Input Processing:**
   - Upload inputs (conversations, journal entries, multimedia, fleeting thoughts).
   - Abstract insights and tag them with values and emotional contexts.

2. **Knowledge Integration:**
   - Add processed data to the dynamic knowledge graph with automatic linking.

3. **Reflect and Explore:**
   - Explore connections, receive reflection prompts, and surface insights.

4. **Share Publicly:**
   - Publish selected insights as an interactive digital garden.

---

## Deployment Options

### 1. Run Locally
Install and run the Cognitive Compass app on your personal machine.
- The app connects to a local MongoDB database.
- Full data privacy and control.

Steps:
```bash
# Clone repository
git clone https://github.com/your-repo/cognitive-compass.git
cd cognitive-compass

# Install dependencies
npm install

# Start the server
mongod --dbpath ./data
node app.js
```
Access the private dashboard at `http://localhost:3000`.

### 2. Self-Hosted Server
Deploy the app on a private server (VPS, Raspberry Pi) for remote access.

Tools:
- **Docker** for deployment.
- **Nginx** for reverse proxying and HTTPS.

Example setup using Docker Compose:
```yaml
version: '3.1'
services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - ./data:/data/db

  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/cognitive_compass
```

### 3. Public Digital Garden
Serve public reflections as a digital garden:
- Hosted at `/digital-garden` within the app.
- Exported as static HTML for deployment on platforms like Netlify or GitHub Pages.

---

## Contributing
Contributions are welcome! If you'd like to:
- Add new frameworks or thinking models.
- Improve the backend or frontend systems.
- Expand the reflective or planning tools.

Please submit a pull request or open an issue.

---

## License
[MIT License](LICENSE)

---

> *"Pursue information seeking to connect deeply and meaningfully with people, nature, and the universe."*

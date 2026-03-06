
// ─── ROLE-SPECIFIC INTRO EXAMPLES ────────────────────────────────────────────
// Used for Q1: "Tell me about yourself" - tailored per job role
const ROLE_INTRO_EXAMPLES = {
    'Frontend Developer': "I'm a Frontend Developer with 3 years of experience building responsive, accessible web applications using React and TypeScript. I've worked on e-commerce platforms where I reduced page load times by 40% through lazy loading and code splitting. I care deeply about clean UI, pixel-perfect design, and smooth user experiences.",
    'Backend Developer': "I'm a Backend Developer with 4 years of experience designing and building RESTful APIs and microservices using Node.js and Python. I've architected systems handling over 1 million requests per day, with a strong focus on performance, security, and scalability. I'm passionate about clean architecture and test-driven development.",
    'Full Stack Developer': "I'm a Full Stack Developer with 3 years of experience working across the entire stack — React on the frontend and Node.js with PostgreSQL on the backend. I've led end-to-end delivery of several SaaS products, from database schema design to UI implementation. I enjoy owning features from conception to deployment.",
    'Mobile Developer (Android)': "I'm an Android Developer with 3 years of experience building native Android apps in Kotlin. My most recent project was a fintech app with 500K+ downloads, where I implemented features like biometric authentication and real-time push notifications using Firebase. I follow MVVM architecture and care about app performance and battery efficiency.",
    'Mobile Developer (iOS)': "I'm an iOS Developer with 3 years of experience developing apps in Swift using UIKit and SwiftUI. I built a health tracking app that was featured in the App Store, where I integrated HealthKit and implemented smooth, animations that improved user retention by 25%. I take accessibility and Apple's HIG guidelines seriously.",
    'Software Engineer': "I'm a Software Engineer with 4 years of experience across the full development lifecycle, from requirements gathering to deployment. I specialize in building scalable backend systems using Java and Spring Boot, and I've contributed to reducing system downtime by 30% through better error handling and circuit breaker patterns.",
    'DevOps Engineer': "I'm a DevOps Engineer with 4 years of experience in CI/CD automation, container orchestration with Kubernetes, and cloud infrastructure on AWS. I led the migration of a monolithic application to containerized microservices, reducing deployment time from 2 hours to under 10 minutes. I'm passionate about reliability, automation, and shifting left on security.",
    'Cloud Engineer': "I'm a Cloud Engineer with 3 years of experience designing and managing infrastructure on AWS and Azure. I've designed multi-region architectures with 99.9% uptime SLAs, built cost-optimization pipelines that saved $200K annually, and automated infrastructure using Terraform and CloudFormation. I hold the AWS Solutions Architect certification.",
    'Site Reliability Engineer (SRE)': "I'm an SRE with 4 years of experience bridging software engineering and operations. I maintain SLOs for services handling millions of users, lead blameless post-mortems, and build tooling that reduces toil. In my last role I improved mean time to recovery (MTTR) by 50% by improving alerting and runbook automation.",
    'QA / Test Engineer': "I'm a QA Engineer with 3 years of experience in both manual and automated testing. I built an automation framework using Selenium and Pytest that reduced regression testing time by 60%. I work closely with developers to shift quality left — writing test plans, reviewing pull requests, and ensuring edge cases are covered before features ship.",
    'Data Analyst': "I'm a Data Analyst with 3 years of experience turning raw data into actionable business insights using Python, SQL, and Tableau. I built a churn prediction dashboard that helped the marketing team reduce customer churn by 18%. I'm comfortable working across data collection, cleaning, analysis, and storytelling with data.",
    'Data Scientist': "I'm a Data Scientist with 4 years of experience building predictive models and running experiments. At my last company, I built a recommendation engine using collaborative filtering that increased average order value by 22%. I work with Python, scikit-learn, and Spark, and I'm experienced in taking models from notebook to production.",
    'Machine Learning Engineer': "I'm an ML Engineer with 3 years of experience deploying machine learning models at scale. I've built and productionized NLP pipelines using Hugging Face Transformers, and set up MLOps workflows with MLflow and Kubeflow. I bridge the gap between data science research and engineering — making sure models are reliable, fast, and maintainable.",
    'AI Engineer': "I'm an AI Engineer with 3 years of experience building AI-powered applications, including LLM integrations, RAG pipelines, and computer vision systems. I've built a customer support chatbot using GPT-4 and LangChain that deflected 40% of support tickets. I focus on prompt engineering, evaluation, and responsible AI practices.",
    'Data Engineer': "I'm a Data Engineer with 4 years of experience building and maintaining data pipelines and warehouses. I've built ETL pipelines on Apache Spark and Airflow that process 5TB of data daily and feed BI tools like Looker. I'm strong in SQL, Python, and cloud data platforms like BigQuery and Snowflake.",
    'Business Intelligence Analyst': "I'm a BI Analyst with 3 years of experience building data models and dashboards that drive strategic decisions. I've designed a KPI reporting suite in Power BI used by C-level executives, and I work closely with stakeholders to understand their needs and translate them into meaningful metrics and visualizations.",
    'UI Designer': "I'm a UI Designer with 3 years of experience creating visually stunning, brand-consistent interfaces. I work in Figma and have delivered design systems for products with 50K+ users. My work on a banking app redesign improved task completion rates by 30% by simplifying navigation and improving visual hierarchy.",
    'UX Designer': "I'm a UX Designer with 4 years of experience focused on user research, wireframing, and usability testing. I follow a human-centered design process — from discovery and research to prototyping and testing. At my last role, my redesign of an onboarding flow reduced drop-off rates by 35% based on A/B testing results.",
    'UI/UX Designer': "I'm a UI/UX Designer with 4 years of experience owning the full design process from research to high-fidelity prototypes. I use Figma, run user interviews and usability tests, and collaborate closely with developers to ensure design intent is preserved in implementation. One of my projects increased user retention by 28% post-redesign.",
    'Product Designer': "I'm a Product Designer with 4 years of experience working in agile product teams. I take ownership of the entire design lifecycle — from understanding user pain points through research, to prototyping, testing, and iterating based on data. I believe great design is invisible: it just makes things work in the way users expect.",
    'Product Manager': "I'm a Product Manager with 4 years of experience leading cross-functional teams to ship user-loved products. I work at the intersection of user needs, business goals, and technical constraints. At my last role, I drove a 3x increase in feature adoption by improving our discovery process and tightening our feedback loop with users.",
    'Product Owner': "I'm a Product Owner with 3 years of experience managing backlogs, writing user stories, and working in Scrum teams. I prioritize ruthlessly based on value and effort, and I'm the bridge between stakeholders and the development team. I've helped ship 4 major product releases on time by keeping the team focused and removing blockers.",
    'Engineering Manager': "I'm an Engineering Manager with 5 years in software engineering and 2 years in management. I lead a team of 8 engineers, focusing on technical excellence, career growth, and team well-being. My team improved sprint velocity by 30% after I introduced structured retrospectives and addressed key bottlenecks in the delivery process.",
    'Project Manager': "I'm a Project Manager with 5 years of experience delivering projects across tech and finance. I'm PMP certified and experienced with both Agile and Waterfall methodologies. I pride myself on clear communication, proactive risk management, and keeping stakeholders aligned. My last project delivered 2 weeks early and 10% under budget.",
    'Scrum Master': "I'm a Certified Scrum Master with 3 years of experience facilitating agile ceremonies and coaching teams. I help teams self-organize, remove impediments, and continuously improve. Under my facilitation, one team went from a 40% sprint commitment rate to consistently completing 90%+ of sprint goals within two quarters.",
    'Technical Lead': "I'm a Technical Lead with 6 years of engineering experience and 2 years leading teams. I balance hands-on coding with technical mentorship, architecture reviews, and cross-team coordination. I introduced a code review culture that reduced production bugs by 45%, and I mentor junior developers through pair programming and 1:1s.",
    'Team Lead': "I'm a Team Lead with 5 years of industry experience and 18 months leading a team of 5 engineers. I focus on building psychological safety, clear ownership, and a culture of continuous improvement. I've helped 3 team members get promoted by creating clear growth paths and advocating for them in performance reviews.",
    'CTO / VP Engineering': "I'm a technology executive with 10+ years of experience scaling engineering organizations. I've grown teams from 5 to 60+ engineers, architected systems for global scale, and aligned engineering strategy with business objectives. I focus on building high-performing cultures, sound technical foundations, and sustainable delivery practices.",
    'Cybersecurity Analyst': "I'm a Cybersecurity Analyst with 3 years of experience in threat detection, incident response, and vulnerability management. I hold the CompTIA Security+ and CEH certifications. In my last role, I identified and remediated a critical SQL injection vulnerability that could have exposed 200K customer records. I'm passionate about proactive defense.",
    'Network Engineer': "I'm a Network Engineer with 4 years of experience designing, implementing, and maintaining enterprise network infrastructure. I'm CCNA certified and have hands-on experience with Cisco and Juniper hardware. I led a network modernization project that improved bandwidth by 3x and reduced latency by 40% across the organization.",
    'System Administrator': "I'm a System Administrator with 4 years of experience managing Linux and Windows server environments. I automate routine tasks using Bash and PowerShell, manage Active Directory, and ensure 99.9% uptime for critical systems. I implemented a centralized monitoring solution that cut our mean time to detect issues by 60%.",
    'Security Engineer': "I'm a Security Engineer with 4 years of experience embedding security into the development lifecycle. I conduct threat modeling, build SAST/DAST pipelines, and run penetration tests. I helped our team achieve SOC2 Type II compliance in under 6 months by building automated compliance checks into our CI/CD pipeline.",
    'Business Analyst': "I'm a Business Analyst with 4 years of experience bridging business stakeholders and technical teams. I'm skilled in requirements gathering, process mapping, and writing clear user stories. In my last project, I identified process inefficiencies that, when resolved, saved the operations team 20 hours per week.",
    'IT Support Specialist': "I'm an IT Support Specialist with 3 years of experience providing Tier 1/2 technical support in fast-paced environments. I'm skilled in troubleshooting hardware, software, and network issues. I maintained a 95% customer satisfaction rating and reduced average ticket resolution time from 4 hours to 90 minutes by improving our knowledge base.",
    'Technical Writer': "I'm a Technical Writer with 3 years of experience creating clear, accurate documentation for software products. I've written API reference docs, user guides, and internal runbooks. I restructured our developer portal, resulting in a 50% reduction in support tickets from developers who previously struggled to understand our API.",
    'Sales Engineer': "I'm a Sales Engineer with 4 years of experience supporting complex B2B SaaS sales cycles. I translate technical capabilities into business value for enterprise customers, conduct product demos, and lead proof-of-concept implementations. In my last role, I contributed to closing $3M in ARR by helping sales teams close technically complex deals.",
    'HR Manager': "I'm an HR Manager with 5 years of experience in talent acquisition, employee relations, and organizational development. I've scaled hiring from 20 to 80 employees in 12 months while maintaining quality and culture fit. I introduced structured interviewing and blind resume screening that improved diversity in our engineering pipeline by 40%.",
    'Recruiter': "I'm a Technical Recruiter with 3 years of experience sourcing and placing software engineers and data professionals. I use a mix of LinkedIn sourcing, referral programs, and community engagement to build pipelines. Last year I filled 35 roles with an average time-to-offer of 18 days and a 90-day retention rate of 95%.",
    'Marketing Analyst': "I'm a Marketing Analyst with 3 years of experience using data to optimize campaigns and drive growth. I'm proficient in Google Analytics, Mixpanel, and SQL. I identified a customer segment being underserved by our messaging and built a targeted campaign that generated $500K in new revenue in one quarter.",
    'Finance Analyst': "I'm a Finance Analyst with 3 years of experience in financial modeling, budgeting, and variance analysis. I built an automated financial reporting dashboard in Excel and Python that reduced monthly close time by 3 days. I'm detail-oriented, data-driven, and experienced in partnering with business units to drive cost efficiency.",
};

// ─── QUESTION BANKS ──────────────────────────────────────────────────────────
const QUESTIONS_DB = {
    // Generic default questions used for Q1 and fallback
    default: [
        {
            q: "Tell me about yourself and your relevant experience.",
            ex: "ROLE_SPECIFIC" // sentinel — replaced at runtime with ROLE_INTRO_EXAMPLES
        },
        {
            q: "What are your greatest strengths and weaknesses?",
            ex: "My greatest strength is my problem-solving ability — I enjoy breaking down ambiguous problems into structured solutions. For example, I once untangled a critical production bug that had stumped the team for a week by methodically isolating variables. My weakness is that I sometimes over-invest in edge cases. I'm improving this by time-boxing investigation phases and asking 'is this worth it?' before going deep."
        },
        {
            q: "Describe a challenging project you worked on.",
            ex: "I worked on a high-stakes project with a 3-month deadline and shifting requirements. I handled the ambiguity by introducing weekly scope reviews and building the most modular parts first. Despite two major pivots, we delivered on time. That experience taught me to design for change — small, loosely-coupled components that can be rewired without a full rewrite."
        },
        {
            q: "Where do you see yourself in 5 years?",
            ex: "In 5 years, I aim to have grown into a senior individual contributor or tech lead — someone who shapes technical direction, mentors others, and drives significant impact. I want to have delivered at least one major platform or product that meaningfully improves users' lives, and I hope to have built a reputation for both technical depth and collaborative leadership."
        },
        {
            q: "Why do you want to work at this company?",
            ex: "I've closely followed your company's evolution — particularly how you've balanced fast growth with engineering quality. The problems you're solving align with my skills and interests, and the engineering culture you've described, with emphasis on ownership and continuous learning, is exactly the environment where I do my best work. I believe I can contribute meaningfully from day one."
        },
    ],

    // ── TECHNICAL ──────────────────────────────────────────────────────────────
    Technical: {
        'Frontend Developer': [
            { q: "Explain the difference between React State and Props.", ex: "State is internal, mutable data managed by a component that triggers re-renders when changed (e.g. a toggle or form input value). Props are read-only values passed from a parent to configure or communicate with a child. A good analogy: props are like function arguments, state is like local variables. In class components you use this.state; in functional components, useState hook." },
            { q: "How do you optimize a React application for performance?", ex: "I approach it in layers: first prevent unnecessary re-renders using React.memo, useMemo, and useCallback. Then reduce bundle size with React.lazy and code splitting. For long lists I use virtualization (react-window). I also audit with Lighthouse and React DevTools Profiler. In a recent project, these changes moved our Lighthouse performance score from 58 to 94." },
            { q: "What is the virtual DOM and how does React use it?", ex: "The virtual DOM is a lightweight JavaScript object tree mirroring the real DOM. When state changes, React builds a new VDOM tree, compares it with the previous one using its diffing algorithm (reconciliation), and only updates the real DOM nodes that changed. This batching and selective update strategy is what makes React fast for interactive UIs." },
            { q: "What are React hooks and why were they introduced?", ex: "Hooks let you use state and lifecycle features in functional components. Before hooks, you had to use class components for stateful logic, which led to complex inheritance chains and logic fragmentation. Hooks (useState, useEffect, useContext, etc.) let you extract and reuse stateful logic without changing the component hierarchy — making code more readable and testable." },
            { q: "How does CSS-in-JS work and when would you choose it?", ex: "CSS-in-JS libraries like styled-components or Emotion let you write CSS inside JavaScript, with full access to props and theme. Styles are scoped to the component automatically. I use it for component libraries where isolation and dynamic theming matter. For large apps with design systems, I sometimes prefer CSS Modules or utility-first CSS for performance and caching benefits." },
        ],
        'Backend Developer': [
            { q: "Explain the difference between SQL and NoSQL databases.", ex: "SQL databases are relational, table-based, and ACID-compliant — great for complex queries and when data integrity is non-negotiable (e.g., financial transactions). NoSQL databases like MongoDB are schema-flexible, horizontally scalable, and optimized for specific access patterns. I choose SQL when relationships and consistency matter, NoSQL when speed, scale, and schema flexibility are the priority." },
            { q: "What is REST and what are its core principles?", ex: "REST is an architectural style for distributed systems built on HTTP. Its principles are: statelessness (each request is self-contained), uniform interface (standard HTTP verbs), client-server separation, cacheability, layered system, and optionally code-on-demand. Following REST produces APIs that are predictable, scalable, and consumable by any HTTP client without tight coupling." },
            { q: "How do you handle authentication and authorization in APIs?", ex: "I use JWT for stateless authentication — the client sends a signed token with each request, and the server verifies it without a DB lookup. For authorization I use role-based access control (RBAC), with middleware that checks the decoded token's roles before entering business logic. For sensitive endpoints I also add rate limiting and refresh token rotation." },
            { q: "What is the N+1 query problem and how do you solve it?", ex: "N+1 happens when fetching a list of records and then issuing a separate DB query per record — e.g. fetching 100 users then making 100 queries for their orders. It kills performance at scale. I solve it with eager loading (JOINs or ORM include), DataLoader batching in GraphQL, or caching. I always use query analysis tools (EXPLAIN ANALYZE) to catch this early." },
            { q: "How would you design an API rate limiting system?", ex: "I'd use a token bucket or sliding window algorithm. Store the request counts per user/IP in Redis with a TTL. On each request, check and decrement the counter; reject with 429 if exhausted. Redis is ideal here due to its atomic operations and speed. I'd also add tiered limits per plan and return helpful Retry-After headers so clients can back off gracefully." },
        ],
        'Full Stack Developer': [
            { q: "How do you decide what logic goes on the frontend vs backend?", ex: "Security-sensitive logic always goes to the backend — validation, auth, payments, data access. The frontend handles presentation, local state, and user interaction. Shared validation rules I define once in a schema (e.g. Zod) and import on both sides. As a rule: never trust client data, never put secrets in the browser, and keep the UI stateless where possible." },
            { q: "Explain the concept of server-side rendering (SSR) vs client-side rendering (CSR).", ex: "With CSR, the browser downloads a minimal HTML shell and JavaScript renders the page. Fast after first load but slow initial paint — bad for SEO. With SSR (e.g. Next.js), the server sends fully rendered HTML, improving SEO and perceived performance. I choose SSR for public-facing pages and CSR for dashboards behind auth. Next.js lets you mix both per-page." },
            { q: "How do you manage state in a full-stack application?", ex: "I separate concerns: server state (data from APIs) is managed by React Query or SWR, which handle caching, refetching, and loading states. UI state (modals, tabs) stays in local component state with useState. Global UI state (user session, theme) goes in Zustand or Context. This prevents over-engineering and keeps each concern in the right layer." },
            { q: "What strategies do you use for database migrations?", ex: "I use versioned migration files (Flyway or Prisma Migrate) committed alongside the code. Migrations run as part of CI/CD before the app deploys. For zero-downtime deploys I use expand-contract migrations: first add the new column (expand), deploy code that handles both, then remove the old column (contract). I never delete columns in the same deploy they're removed from the code." },
        ],
        'DevOps Engineer': [
            { q: "What is the difference between Docker and Kubernetes?", ex: "Docker is a containerization platform — it packages apps with their dependencies into portable images. Kubernetes is an orchestration platform that manages clusters of containers: scheduling, scaling, self-healing, load balancing, and rolling updates. Think of Docker as your container format and Kubernetes as the system that runs, monitors, and scales thousands of those containers across servers." },
            { q: "Explain CI/CD and what a good pipeline looks like.", ex: "CI is automated integration — every commit triggers builds, tests, and linting. CD extends this to automated delivery to staging or production. A good pipeline: code push → lint/format → unit tests → build Docker image → push to registry → integration tests → deploy to staging → smoke tests → production deploy with zero-downtime strategy → rollback if health checks fail. Speed and reliability are the twin goals." },
            { q: "How would you handle secrets management in a cloud environment?", ex: "Never hardcode secrets. I use tools like AWS Secrets Manager or HashiCorp Vault to store secrets, with IAM roles granting least-privilege access. Applications fetch secrets at startup, not at build time. In Kubernetes, I inject secrets as environment variables via Kubernetes Secrets (or External Secrets Operator with Vault backend). I also rotate secrets regularly and audit access logs." },
            { q: "What is Infrastructure as Code (IaC) and what tools do you use?", ex: "IaC means defining infrastructure (VMs, networks, databases) in config files that are version-controlled and applied automatically. I use Terraform for cloud-provider-agnostic infra and AWS CDK when I want the expressiveness of TypeScript. IaC eliminates drift between environments, enables review-based changes, and allows rollback if something goes wrong — treating infrastructure with the same rigor as application code." },
        ],
        'Data Scientist': [
            { q: "Explain the bias-variance tradeoff.", ex: "Bias is the model's error from wrong assumptions — an underfit model has high bias (e.g. trying to fit a non-linear pattern with a straight line). Variance is the model's sensitivity to small fluctuations — an overfit model has high variance (memorizing training data). The tradeoff is that reducing one tends to increase the other. The goal is to find the sweet spot using regularization, cross-validation, and the right model complexity." },
            { q: "How do you handle missing data in a dataset?", ex: "My approach depends on the mechanism: if missing completely at random, I may drop rows if they're few. Otherwise I impute — mean/median for numerical, mode for categorical, or KNN/model-based imputation for complex relationships. For tree-based models I can sometimes let them handle missingness natively. I always check if missingness itself is informative (adding an indicator column) and validate my strategy on a hold-out set." },
            { q: "What is cross-validation and why do you use it?", ex: "Cross-validation (especially k-fold) gives a more reliable estimate of model generalization by rotating through different train/validation splits. It's critical when you have limited data — a single train/val split has high variance. I use stratified k-fold for imbalanced classification. For time series I use forward chaining (time-series split) to avoid data leakage from the future into the past." },
            { q: "How would you approach building a churn prediction model?", ex: "I'd start with EDA to understand churn rates, segments, and behavioral signals. Feature engineering: recency, frequency, engagement scores, subscription age. I'd try gradient boosting (XGBoost or LightGBM) as a strong baseline, calibrate probabilities, and use SHAP for interpretability. Business success metrics matter: I'd align on a recall/precision tradeoff based on the cost of false positives vs. missed churners." },
        ],
        'Machine Learning Engineer': [
            { q: "What is the difference between a Data Scientist and an ML Engineer?", ex: "Data Scientists focus on analysis, experimentation, and building models in notebooks. ML Engineers focus on taking those models to production reliably — packaging, serving, monitoring, and scaling them. As an ML Engineer I own the full MLOps lifecycle: feature pipelines, model training infrastructure, serving APIs, A/B experimentation frameworks, and monitoring for data drift and model degradation." },
            { q: "How do you deploy a machine learning model to production?", ex: "I containerize the model using Docker, expose it via a FastAPI endpoint, and deploy to Kubernetes or a managed service like AWS SageMaker. For versioning I use MLflow. The serving layer includes input validation, output logging, and latency monitoring. I also write integration tests that run in CI against real model artifacts to catch regressions before they reach production." },
            { q: "What is model drift and how do you monitor for it?", ex: "Model drift is when model performance degrades over time because the real-world data distribution changes (data drift) or the relationship between features and labels changes (concept drift). I monitor it using statistical tests on feature distributions (PSI, KS test) and tracking key business metrics alongside model metrics. When drift is detected, I trigger retraining pipelines and evaluate whether the model needs architectural changes." },
        ],
        'Cloud Engineer': [
            { q: "Explain the difference between IaaS, PaaS, and SaaS.", ex: "IaaS (Infrastructure as a Service) gives you raw compute, storage, and networking — you manage the OS up. PaaS (Platform as a Service) abstracts the infrastructure; you just deploy code (e.g. Heroku, AWS Elastic Beanstalk). SaaS is fully managed software accessed via browser (e.g. Gmail, Salesforce). As a Cloud Engineer I primarily work with IaaS and PaaS, designing the right abstraction level for each workload." },
            { q: "How do you design a cloud architecture for high availability?", ex: "High availability requires eliminating single points of failure at every layer. I deploy across multiple availability zones, use auto-scaling groups behind load balancers, put databases in multi-AZ configurations with automatic failover, and use a CDN for static assets. I define SLOs and design for graceful degradation — so if one service fails, others degrade gracefully instead of causing a full outage." },
            { q: "How do you optimize cloud costs?", ex: "I start with right-sizing — using Cost Explorer and CloudWatch metrics to identify over-provisioned resources. I buy Reserved Instances or Savings Plans for predictable workloads and Spot Instances for fault-tolerant batch jobs. I set up auto-scaling to match capacity with demand. I also tag every resource for cost attribution, schedule non-production environments to turn off overnight, and review the bill weekly." },
        ],
        'QA / Test Engineer': [
            { q: "What is the testing pyramid and how does it guide your strategy?", ex: "The testing pyramid puts fast, cheap unit tests at the base (70%), integration tests in the middle (20%), and slow, expensive E2E tests at the top (10%). I follow this ratio to keep the suite fast and reliable. Heavy E2E tests are fragile and slow — I use them only for critical user journeys. Unit and integration tests catch most bugs early at a fraction of the cost." },
            { q: "What is the difference between functional and non-functional testing?", ex: "Functional testing verifies that the system does what it's supposed to — features work as specified. Non-functional testing covers how well: performance (load testing), security (pen testing), reliability (chaos engineering), and accessibility (a11y audits). Both are essential — a feature that works but crashes under load or has security vulnerabilities is not production-ready." },
            { q: "How do you approach testing a feature with no requirements?", ex: "I start with exploratory testing to understand what the feature does and surface obvious issues. Then I apply equivalence partitioning and boundary value analysis to build a lightweight test plan. I'll interview the developer or product owner to capture intent and edge cases. Testing without specs is also a signal — I'd advocate for at least minimal acceptance criteria before development starts." },
        ],
        'Cybersecurity Analyst': [
            { q: "What is the CIA triad in cybersecurity?", ex: "CIA stands for Confidentiality, Integrity, and Availability — the three core goals of any security program. Confidentiality means only authorized users can access data (encryption, access controls). Integrity means data isn't altered without authorization (hashing, digital signatures). Availability means systems are accessible when needed (redundancy, DDoS protection). Every security control I implement maps back to protecting at least one of these properties." },
            { q: "How would you respond to a suspected data breach?", ex: "I follow the NIST incident response lifecycle: Preparation, Detection, Containment, Eradication, Recovery, and Lessons Learned. Immediately I'd isolate affected systems to prevent lateral movement, preserve evidence by taking forensic snapshots, and notify the incident response team and legal. I'd identify the attack vector, remove malware or compromised credentials, restore from clean backups, and conduct a blameless post-mortem." },
            { q: "What is the difference between a vulnerability, a threat, and a risk?", ex: "A vulnerability is a weakness in a system (e.g. an unpatched SQL injection flaw). A threat is any potential cause of harm — it exploits vulnerabilities (e.g. a malicious attacker). Risk is the combination of threat likelihood and impact — it answers 'should we prioritize this?' I use this framework to drive risk-based remediation: not every vulnerability needs immediate patching, but a critical externally-facing one does." },
        ],
        'Business Analyst': [
            { q: "How do you gather and document requirements from stakeholders?", ex: "I use a mix of techniques depending on the stakeholders: structured interviews for executives, workshops for cross-functional teams, and shadowing for operational staff. I document requirements as user stories with clear acceptance criteria in Jira, and I use process maps (BPMDs) to visualize flows. I run review sessions to validate requirements before handing off to development, ensuring shared understanding and sign-off." },
            { q: "How do you prioritize requirements when everything seems critical?", ex: "I use the MoSCoW method (Must have, Should have, Could have, Won't have) in workshops with stakeholders, and I combine it with effort vs. value scoring. When stakeholders disagree I facilitate a structured prioritization exercise — giving each stakeholder a fixed number of 'votes'. I ensure every priority decision is traceable to a business objective so pushback is data-driven, not political." },
            { q: "How do you handle changing requirements mid-project?", ex: "Change is inevitable, so I plan for it. I assess the impact of each change request: effort, timeline, budget, and downstream effects. I document the change in a formal change log, get sign-off from the relevant stakeholders, and update the backlog. In Agile contexts I treat new requirements as backlog items for future sprints. I always communicate trade-offs clearly — changing X means delaying Y." },
        ],
        'Product Manager': [
            { q: "How do you prioritize features in a product backlog?", ex: "I use a combination of frameworks: RICE (Reach, Impact, Confidence, Effort) for quantitative scoring, and a value vs. effort matrix for quick gut-checks in team discussions. But frameworks are tools, not answers — I also ensure alignment with strategic objectives and validate assumptions with user research. I document the 'why' behind priorities so the team understands context, not just the what." },
            { q: "How do you define and measure product success?", ex: "I start by tying the product goal to a business outcome (e.g. increase retention by 10%). Then I define leading indicators that predict that outcome (e.g. users who complete onboarding are 3x more likely to retain). I set up instrumentation before launch and review metrics weekly. I'm skeptical of vanity metrics — page views mean nothing if users aren't achieving their core job-to-be-done." },
            { q: "Tell me about a product decision you made with limited data.", ex: "We were deciding whether to build offline mode — a large investment. We had limited analytics but ran a 2-day user interview sprint, spoke to 8 customers in high-latency regions, and found consistent, painful workarounds. We built a lightweight prototype and shipped a beta. Early retention data confirmed our hypothesis. The lesson: when data is scarce, fast qualitative research is your best friend." },
        ],
        'HR Manager': [
            { q: "How do you handle a conflict between two employees?", ex: "I address conflicts early — silence lets them escalate. I meet with each party separately to understand their perspective without judgment, then facilitate a mediated conversation focused on behaviors and impact, not personalities. I document the discussion and agree on concrete next steps. If the conflict is recurring or involves misconduct, I escalate per policy. My goal is resolution that preserves both the relationship and team trust." },
            { q: "How do you approach building a strong company culture?", ex: "Culture is built through consistent behavior, not posters. It starts with hiring people who demonstrate the values, not just claim them. I build rituals that reinforce culture — structured onboarding, team retrospectives, recognition programs. I also make it safe to raise concerns. Culture health shows up in retention, engagement scores, and how people treat each other under pressure — I track all three." },
        ],
        'Marketing Analyst': [
            { q: "How do you measure the ROI of a marketing campaign?", ex: "I tie each campaign to business metrics, not just vanity metrics. For a demand-gen campaign I track MQLs, SQLs, pipeline generated, and ultimately closed revenue attributed to that campaign using UTM parameters and CRM data. I calculate ROI as (Revenue Attributed - Campaign Cost) / Campaign Cost. I also analyze CAC by channel to invest more in channels with the best payback period." },
            { q: "Explain the difference between correlation and causation in marketing analytics.", ex: "Correlation means two metrics move together — e.g. email opens and purchases rise at the same time. Causation means one causes the other. Correlation doesn't imply causation: maybe a product launch caused both. To establish causation I run A/B tests with random assignment. This is critical because making budget decisions based on spurious correlation wastes money — I always push for controlled experiments before scaling a channel." },
        ],
    },

    // ── HR / BEHAVIORAL ────────────────────────────────────────────────────────
    'HR / Behavioral': {
        default: [
            { q: "Tell me about a time you handled a conflict with a teammate.", ex: "A colleague and I disagreed on the technical approach for a critical feature. Instead of escalating, I proposed we each write up our approach with pros/cons and review together. In that session we realized a hybrid approach was best. The experience reinforced for me that conflict is often a signal that we're thinking deeply — the key is creating a structured space to resolve it." },
            { q: "Describe a time you had to meet a tight deadline.", ex: "We had a key demo in 4 days and a critical feature wasn't complete. I immediately mapped out the remaining work, cut scope to the minimum viable version, and coordinated with QA to test in parallel with development. We delivered on time with core functionality. I learned that under pressure, clarity of scope and communication beats heroics." },
            { q: "Tell me about a time you failed at something.", ex: "I underestimated the complexity of a data migration and gave the stakeholder an unrealistic timeline. We missed the deadline by 2 weeks, eroding trust. I owned it immediately, communicated proactively, and built a new plan with buffer. Since then I always add a risk assessment and buffer to my estimates and verify my assumptions before committing." },
            { q: "Tell me about a time you had to learn something quickly.", ex: "When we adopted Kubernetes mid-project, I had a week to get up to speed before leading the migration. I structured my learning: docs and official tutorials in the first two days, then hands-on labs, then reviewing real-world examples from production repos. By day 7 I presented a migration plan to the team. Structured, time-boxed learning has become my go-to approach for new technologies." },
            { q: "Describe a situation where you influenced someone without authority.", ex: "I wanted our team to adopt code review standards, but I had no authority to mandate it. I wrote a short proposal with data on bug rates before and after review, presented it in our retro, and offered to pair on the first few reviews. After seeing the benefits, the team adopted it voluntarily. I've found that leading with data and making change easy beats top-down mandates." },
        ],
    },

    // ── SYSTEM DESIGN ──────────────────────────────────────────────────────────
    'System Design': {
        default: [
            { q: "How would you design a URL shortening service like bit.ly?", ex: "I'd design it with a write-and-read-optimized architecture. A hash function (base62 encoding of an auto-incremented ID) generates the short code. The mapping is stored in a key-value store like DynamoDB for fast reads. A CDN caches popular redirects. For analytics, clicks are written to a message queue (Kafka) and processed asynchronously. I'd scale horizontally and add rate limiting on the write endpoint to prevent abuse." },
            { q: "How would you design a notification system at scale?", ex: "I'd use an event-driven architecture: services publish events to a message queue (Kafka). A notification service consumes events, determines the right channel (push, email, SMS), applies user preferences, and routes to provider APIs (FCM, SendGrid, Twilio). To handle spikes, I'd back-pressure the queue and use dead-letter queues for failures. Deduplication keys prevent duplicate notifications in at-least-once delivery scenarios." },
            { q: "How do you design a system to handle millions of concurrent users?", ex: "I'd design for horizontal scalability from the start: stateless application servers behind a load balancer, a distributed cache (Redis) for hot data, a sharded database for write scalability, and a CDN for static assets. I'd use async messaging (SQS/Kafka) to decouple heavy processing. Each component scales independently. I'd define SLOs, load test with realistic profiles, and add circuit breakers to isolate failures." },
        ],
    },

    // ── MANAGERIAL ─────────────────────────────────────────────────────────────
    'Managerial': {
        default: [
            { q: "How do you handle an underperforming team member?", ex: "I start from curiosity, not judgment. I'd have a private, candid conversation to understand what's driving the underperformance — it's often unclear expectations, personal challenges, or a skill gap, not a motivation issue. I'd set clear, measurable goals with a timeline, provide the support needed (coaching, training), and check in frequently. If improvement doesn't come after genuine support, I'd follow the formal performance process." },
            { q: "How do you prioritize when your team has more work than capacity?", ex: "First I make the capacity problem visible — many teams suffer silently. I work with stakeholders to rank initiatives by impact and urgency, say no to genuinely low-value work, and protect the team from context-switching. I also look for quick wins to create breathing room. Sustainable pace matters: a burnt-out team delivers worse outcomes than a focused team doing fewer things well." },
            { q: "How do you build psychological safety in a team?", ex: "Psychological safety means people can speak up, disagree, and make mistakes without fear. I model it: I admit my own mistakes openly, thank people for raising concerns, and never shoot the messenger. I create structural safety through blameless retrospectives and structured 'devil's advocate' time in design reviews. I also pay attention to who isn't speaking — those voices often hold the most important insights." },
        ],
    },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const QUESTION_PATTERNS = /^(what|how|why|when|where|who|which|can you|could you|do you|is it|are there|explain|tell me|help me|i don't understand|i don't know|what does|what is|what are)/i;

const FILLER_ONLY_PATTERN = /^(ok|okay|ok+|hmm+|hm+|uh+|um+|yeah+|yep|yup|sure|fine|alright|right|got it|i see|oh|ah+|lol|haha|ha|nice|cool|good|great|thanks|thank you|no|yes|nope|nah|idk|i don't know|dunno|nothing|none|skip|next|pass|whatever|k|kk|ok fine|ok ok|hmm ok|oh ok)[.!,\s]*$/i;

const getQuestions = (role, type) => {
    const roleQs = QUESTIONS_DB[type]?.[role] || [];
    const typeDefaultQs = QUESTIONS_DB[type]?.default || [];
    const defaultQs = QUESTIONS_DB.default || [];
    if (roleQs.length > 0) return roleQs;
    if (typeDefaultQs.length > 0) return typeDefaultQs;
    return defaultQs;
};

const getRoleIntroExample = (role) => {
    return ROLE_INTRO_EXAMPLES[role] ||
        "I'm a professional with several years of experience in my field. I've worked on meaningful projects that helped me develop strong technical and collaboration skills. I'm passionate about continuous learning and delivering high-quality work that creates real value.";
};

const isUserAskingQuestion = (text) => {
    const trimmed = text.trim();
    return trimmed.endsWith('?') || QUESTION_PATTERNS.test(trimmed);
};

const isIrrelevantAnswer = (text) => {
    const trimmed = text.trim();
    if (FILLER_ONLY_PATTERN.test(trimmed)) return true;
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length < 4) return true;
    if (/^(.)\1{3,}$/.test(trimmed.replace(/\s/g, ''))) return true;
    return false;
};

// Advanced string generation to refine the user's answer into a better "example" format
const generateImprovedAnswer = (originalAnswer, currentQuestion, config) => {
    const wordCount = originalAnswer.split(/\s+/).filter(Boolean).length;
    const lowerAnswer = originalAnswer.toLowerCase();

    const isTechnicalOrSystem = config.type === 'Technical' || config.type === 'System Design';

    // Extract some key phrases from the original answer to make feedback feel relevant
    const techMatches = originalAnswer.match(/\b(api|databases?|sql|nosql|docker|kubernetes|react|node\.?js|python|java|aws|cloud|ci\/cd|agile|scrum|algorithms?|architecture|microservices?|caching|performance|security|pipelines?|models?|data|metrics|frameworks?|libraries|stack|deployments?|testing|patterns?|frontend|backend|ux|ui)\b/ig);
    const techUsed = techMatches && techMatches.length > 0
        ? [...new Set(techMatches.map(t => t.toLowerCase()))].slice(0, 3).join(", ")
        : "[Core Technology/Pattern]";

    let actionContext = "addressing the core problem";
    let actionVerb = "implementing";
    let actionTarget = "the solution";

    // Catch common action phrasing like "I built a dashboard" or "we designed the API"
    const actionMatch = originalAnswer.match(/(i|we)\s+(built|created|designed|managed|led|handled|fixed|resolved|developed|implemented|optimized|improved)\s+([\w\s-]{3,40})/i);
    if (actionMatch) {
        actionContext = actionMatch[0].trim();
        const verb = actionMatch[2].toLowerCase();
        actionTarget = actionMatch[3].trim();

        const verbMap = {
            'built': 'building', 'created': 'creating', 'designed': 'designing',
            'managed': 'managing', 'led': 'leading', 'handled': 'handling',
            'fixed': 'fixing', 'resolved': 'resolving', 'developed': 'developing',
            'implemented': 'implementing', 'optimized': 'optimizing', 'improved': 'improving'
        };
        actionVerb = verbMap[verb] || verb + 'ing';
    }

    let situationContext = `my recent role`;
    const situationMatch = originalAnswer.match(/(in my|at my|during my|when i was|working on)\s+([\w\s-]{3,30})/i);
    if (situationMatch) {
        situationContext = situationMatch[0].trim();
    }

    // Very short answers don't have enough material to 'refine', return a standard tip
    if (wordCount < 15) {
        if (isTechnicalOrSystem) {
            return `Your answer was quite brief. An improved technical response would explain the *why* and the *how*, not just the *what*.\n\nFor example:\n\n"I would approach this by using ${techUsed !== "[Core Technology/Pattern]" ? techUsed : "[Technology/Pattern]"}. The main reason is [Advantage/Trade-off]. In a previous scenario where we needed to do this, I implemented it by [brief example], which resulted in [performance/reliability improvement]."\n\nRemember to explicitly demonstrate your domain knowledge.`;
        } else {
            return `Your answer was quite brief. An improved response would follow the STAR method (Situation, Task, Action, Result) and include specific details.\n\nFor example, if asked this question, you might want to structure it like:\n\n"During ${situationContext}, we faced a challenge with [Issue]. I was responsible for [Task]. To solve this, I focused on ${actionTarget}. As a result, [Concrete outcome with metrics if possible]."\n\nRemember to tie it back to the core skills required for a ${config.role}.`;
        }
    }

    if (isTechnicalOrSystem) {
        // Technical refinement logic
        const hasTech = techMatches && techMatches.length > 0;
        const hasExample = /\b(for example|such as|like when|instance|used it to)\b/i.test(originalAnswer);

        let refined = `Here are 5 ways to improve this answer to a 10/10:\n\n`;

        refined += `1. **Define the Core Concept Clearly:** Start by explicitly stating your approach. For example: *"To address this, my approach would center around ${techUsed !== "[Core Technology/Pattern]" ? techUsed : "[Specific Technology]"}."*\n`;

        if (!hasTech) {
            refined += `2. **Add Technical Depth:** Your answer was too high-level. Mention specific design patterns, tools, or architectural trade-offs you would consider.\n`;
        } else {
            refined += `2. **Explain the 'Why':** You mentioned ${techUsed}, but you need to explain *why* you chose them. What are the specific technical advantages or trade-offs?\n`;
        }

        if (!hasExample) {
            refined += `3. **Provide a Real-World Example:** Ground your answer in experience: *"For instance, when I encountered a similar requirement while ${actionContext}, I applied this pattern..."*\n`;
        } else {
            refined += `3. **Expand on Your Example:** You provided a good example! Elaborate slightly on the specific technical hurdles you overcame in that scenario.\n`;
        }

        refined += `4. **Discuss Edge Cases:** A 10/10 answer considers what could go wrong. Mention potential bottlenecks, security concerns, or scaling limitations of your approach.\n`;
        refined += `5. **Connect to Business Value:** Briefly tie your technical choice back to why it matters (e.g., *"This approach ensures we maintain 99.9% uptime while keeping infrastructure costs low."*)\n`;

        return refined;
    } else {
        // Behavioral refinement logic (STAR method)
        const hasSituation = /\b(when|once|at my|in my|we were|there was)\b/i.test(originalAnswer);
        const hasResult = /\b(result|outcome|impact|reduced|increased|improved|saved|achieved|times faster|under budget)\b/i.test(originalAnswer);
        const hasMetrics = /\b(\d+\s*(%|percent|x|times|hours?|days?|k|m|million|thousand|\$))\b/i.test(originalAnswer);

        let refined = `Here are 5 ways to improve this answer to a 10/10:\n\n`;

        if (!hasSituation) {
            refined += `1. **Set the Stage (Situation):** Give more context before jumping into the action. Try: *"During ${situationContext}, we were facing a challenge with..."*\n`;
        } else {
            refined += `1. **Clarify the Situation:** You provided context, but make sure to emphasize *why* the situation was critical or challenging for the business.\n`;
        }

        refined += `2. **Define Your Specific Task:** Clearly state what *your* specific responsibility was before explaining what the team did.\n`;

        refined += `3. **Detail Your Actions:** Break down the specific steps you took. For example: *"I took the lead by ${actionContext}. Specifically, I focused on ${actionTarget}..."*\n`;

        if (!hasResult || !hasMetrics) {
            refined += `4. **Quantify the Result:** You missed highlighting the measurable outcome. Close powerfully: *"As a result of ${actionVerb} ${actionTarget}..."* and include specific metrics (e.g., % improvement, time saved).\n`;
        } else {
            refined += `4. **Emphasize the Impact:** You included great metrics! Make sure to explicitly connect how your action directly caused those specific results.\n`;
        }

        refined += `5. **Share a Key Learning:** Top-tier answers conclude with a brief reflection on what you learned from the experience and how you apply it today.\n`;

        return refined;
    }
};

// ─── SERVICE ──────────────────────────────────────────────────────────────────
export const mockAiService = {
    startInterview: async (config) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Q1 is always "Tell me about yourself" with a role-specific example answer
        const introQ = QUESTIONS_DB.default[0];
        const roleExample = getRoleIntroExample(config.role);

        return {
            message: `👋 Hello! I'm your **AI Interview Coach**.\n\nI'll be interviewing you today for a **${config.level} ${config.role}** position, focusing on **${config.type}** questions.\n\nFeel free to ask me anything if you're unclear about a question. Otherwise, answer as you would in a real interview.\n\nLet's begin! 🚀\n\n---\n\n**Question 1:**\n${introQ.q}`,
            initialQuestion: introQ.q,
        };
    },

    submitAnswer: async (currentQuestion, userAnswer, config, source = 'text') => {
        await new Promise(resolve => setTimeout(resolve, 1200));

        // 1. Detect user asking a question
        if (isUserAskingQuestion(userAnswer)) {
            const pool = getQuestions(config.role, config.type);
            const currentQ = pool[Math.floor(Math.random() * pool.length)];
            return {
                feedback: null, score: null, isQuestion: true,
                nextMessage: `Great question! 💡\n\nIn a real interview, it's perfectly fine to ask for clarification. Here's a tip: when you're unsure, say something like *"Just to make sure I understand — are you asking about X?"*\n\nFor practice, I'd encourage you to attempt an answer based on your current understanding. Have a go at it!\n\n---\n\nLet's continue. Here's your next question:\n\n**${currentQ.q}**`,
                nextQuestionText: currentQ.q,
            };
        }

        // 2. Detect irrelevant / filler-only responses
        if (isIrrelevantAnswer(userAnswer)) {
            return {
                feedback: null, score: null, isQuestion: true,
                nextMessage: `⚠️ That doesn't look like a proper answer to the interview question.\n\nResponses like *"ok"*, *"hmm"*, *"yeah"*, or very short replies aren't something I can evaluate — in a real interview, this would leave a poor impression.\n\n💡 **Please try again with a proper answer.** Take a moment to think, and answer in at least a few sentences. You've got this! 🙌\n\nThe question is still open — go ahead and answer it.`,
                nextQuestionText: currentQuestion, // Keeps the same question active
            };
        }

        // ── Smart answer analysis ───────────────────────────────────────────
        const wordCount = userAnswer.split(/\s+/).filter(Boolean).length;
        const lowerAnswer = userAnswer.toLowerCase();

        // Determine question type to provide more relevant evaluation
        const isTechnicalOrSystem = config.type === 'Technical' || config.type === 'System Design';
        const isBehavioralOrHR = config.type === 'HR / Behavioral' || (config.type !== 'Technical' && config.type !== 'System Design');
        // Q1 "Tell me about yourself" acts as a behavioral intro usually

        // ── Signal detection ──────────────────────────────────────────────────
        // STAR method: presence of context + action + result language
        const hasSituation = /\b(when|once|at my|in my (last|previous|current)|we were|i was|there was|the team|our (team|company|project)|last (year|month|quarter)|project i)\b/i.test(userAnswer);
        const hasAction = /\b(i (led|built|designed|implemented|created|developed|fixed|resolved|managed|introduced|improved|reduced|increased|optimized|refactored|automated|architected|delivered|wrote|set up|established|worked|handled|coordinated))\b/i.test(userAnswer);
        const hasResult = /\b(result(ed)?|outcome|impact|reduced|increased|improved|saved|achieved|delivered|by \d|percent|%|\dx|times faster|within|under budget|on time|successfully)\b/i.test(userAnswer);
        const hasSTAR = hasSituation && hasAction && hasResult;
        const hasPartialSTAR = (hasSituation || hasAction) && !hasSTAR;

        // Specific numbers / metrics
        const hasMetrics = /\b(\d+\s*(%|percent|x|times|hours?|days?|weeks?|months?|users?|customers?|k|m|billion|million|thousand|\$|dollars?|points?|ms|seconds?))\b/i.test(userAnswer);

        // Concrete examples
        const hasExamples = /\b(for example|for instance|such as|e\.g\.|specifically|in particular|to illustrate|like when|one time|i once|a case where)\b/i.test(lowerAnswer);

        // First-person ownership
        const hasOwnership = /\b(i (led|owned|was responsible|took|decided|initiated|drove|spearheaded))\b/i.test(lowerAnswer);

        // Vague language (negative signal)
        const vagueMatches = (userAnswer.match(/\b(i think|i believe|i guess|maybe|perhaps|probably|kind of|sort of|usually|sometimes|i feel like|not sure|i'll try|we just|basically)\b/gi) || []).length;
        const isVague = vagueMatches >= 2;

        // Technical terms (positive signal for technical)
        const technicalTerms = (userAnswer.match(/\b(api|database|sql|nosql|docker|kubernetes|react|node|python|java|aws|cloud|ci\/cd|agile|scrum|algorithm|architecture|microservice|cache|performance|security|pipeline|model|data|metrics|framework|library|stack|scalab|deploy|test|debug|refactor|optimize|pattern|system)\b/gi) || []).length;
        const hasTechnicalDepth = technicalTerms >= 2;

        // Answer length quality
        const isTooShort = wordCount < 30;
        const isRambling = wordCount > 180;
        const isGoodLength = wordCount >= 50 && wordCount <= 180;

        // ── Build dynamic strengths ───────────────────────────────────────────
        const strengths = [];
        if (isBehavioralOrHR && hasSTAR) strengths.push("Excellent use of the STAR method — you covered the situation, action, and result clearly.");
        if (isBehavioralOrHR && hasMetrics) strengths.push("Good use of specific numbers and metrics — this makes your answer credible and memorable.");
        if (hasExamples) strengths.push("You supported your points with concrete examples, which helps ground your explanation.");
        if (isBehavioralOrHR && hasOwnership) strengths.push("Strong sense of ownership — you clearly positioned yourself as the driver, not a bystander.");
        if (isTechnicalOrSystem && hasTechnicalDepth) strengths.push("Good technical depth — you demonstrated relevant domain knowledge naturally.");
        if (isGoodLength) strengths.push("Well-paced answer — detailed enough to be substantive, concise enough to stay engaging.");
        if (!isVague && wordCount > 20) strengths.push("Confident and direct language — no hedging or vagueness, which signals conviction.");

        // Ensure at least one strength
        if (strengths.length === 0) {
            strengths.push("You attempted the question and stayed on topic — a solid starting point to build from.");
        }

        // ── Build dynamic improvements ────────────────────────────────────────
        const improvements = [];

        // Behavioral-specific critiques
        if (isBehavioralOrHR) {
            if (!hasSTAR && !hasPartialSTAR && wordCount > 20) improvements.push("For experience-based questions, structure your answer using the STAR method (Situation, Task, Action, Result) to tell a clearer story.");
            if (hasPartialSTAR && !hasSTAR) {
                if (!hasResult) improvements.push("You set up the context well, but missing the result — always close with the measurable outcome of your actions.");
                else if (!hasSituation) improvements.push("Give more context upfront — briefly describe the situation or project before jumping into what you did.");
            }
            if (!hasMetrics) improvements.push("Quantify your impact — add specific numbers (e.g., team size, efficiency gains, time saved) to make your experience stand out.");
        }

        // Technical-specific critiques
        if (isTechnicalOrSystem) {
            if (!hasTechnicalDepth && wordCount > 15) improvements.push("For technical questions, try to explicitly mention the tools, frameworks, or architectural patterns you would use to ground your answer in reality.");
            if (!hasExamples && wordCount < 60) improvements.push("Even for conceptual questions, providing a short example of when you'd use a specific technology or pattern helps prove you understand it in practice.");
        }

        // General communication critiques
        if (isVague) improvements.push(`Avoid hedging language — phrases like "I think", "kind of", or "maybe" (used ${vagueMatches} times here) weaken your answer. Speak with confidence.`);
        if (isTooShort) {
            if (isTechnicalOrSystem) improvements.push("Your answer was quite short. Make sure you fully explain the 'why' and the 'how' behind your technical reasoning.");
            else improvements.push("Your answer was quite short — aim for 3–5 sentences minimum. Interviewers want detail, not brevity.");
        }
        if (isRambling) improvements.push("Your answer was quite long — practice trimming to the key points. Aim for under 2 minutes of speech.");

        // Ensure at least one improvement
        if (improvements.length === 0) {
            improvements.push(isTechnicalOrSystem
                ? "Strong answer! To push it further, you could discuss edge cases or alternative technical approaches you considered and rejected."
                : "Strong answer overall! For even more impact, close with what you learned or how the outcome influenced your future approach.");
        }

        // ── Compute content score based on signals ────────────────────────────
        let contentScore = 5; // baseline
        if (isBehavioralOrHR) {
            if (hasSTAR) contentScore += 2;
            else if (hasPartialSTAR) contentScore += 1;
            if (hasMetrics) contentScore += 1;
            if (hasOwnership) contentScore += 0.5;
        }
        if (isTechnicalOrSystem && hasTechnicalDepth) contentScore += 1.5;
        if (hasExamples) contentScore += 0.5;

        if (isVague) contentScore -= 1;
        if (isTooShort) contentScore -= 1.5;
        if (isRambling) contentScore -= 0.5;
        contentScore = Math.round(Math.min(10, Math.max(1, contentScore)));

        const feedbackObj = { strengths, improvements };

        // 4. Voice evaluation (only when mic was used)
        let voiceSection = '';
        let totalScore = contentScore;

        if (source === 'voice') {
            const fillerWords = (userAnswer.match(/\b(um|uh|like|you know|basically|literally|actually|right|so)\b/gi) || []).length;
            const fillerRate = wordCount > 0 ? (fillerWords / wordCount) * 100 : 0;
            const sentences = userAnswer.split(/[.!?]+/).filter(Boolean).length;
            const wordsPerSentence = wordCount / Math.max(sentences, 1);
            const pace = wordsPerSentence > 25 ? 'Fast' : wordsPerSentence < 8 ? 'Slow' : 'Natural';
            const clarity = fillerRate < 3 ? 'High' : fillerRate < 8 ? 'Moderate' : 'Low';
            const hesitation = fillerWords === 0 ? 'None detected' : fillerWords <= 2 ? 'Minimal' : 'Noticeable';

            let voiceScore = 8;
            if (fillerRate > 8) voiceScore -= 2;
            else if (fillerRate > 3) voiceScore -= 1;
            if (pace === 'Fast') voiceScore -= 1;
            if (wordCount < 15) voiceScore = 5;
            voiceScore = Math.max(1, Math.min(10, voiceScore));

            totalScore = Math.round((contentScore * 0.7) + (voiceScore * 0.3));

            const voiceTips = [];
            if (fillerRate > 3) voiceTips.push(`Reduce filler words — detected **${fillerWords}** (um, uh, like, etc.). Pause silently instead.`);
            if (pace === 'Fast') voiceTips.push("Slow down slightly — speaking too fast reduces clarity.");
            if (pace === 'Slow') voiceTips.push("Maintain a more confident pace — avoid long pauses mid-sentence.");
            if (voiceTips.length === 0) voiceTips.push("Great vocal delivery! Keep it up.");

            voiceSection = `\n\n**🎙️ Voice Analysis:**\n• Voice Confidence: ${voiceScore}/10\n• Pace: ${pace}\n• Clarity: ${clarity}\n• Hesitation: ${hesitation}\n\n**🔊 Voice Tips:**\n${voiceTips.map(t => `- ${t}`).join('\n')}`;
        }

        const pool = getQuestions(config.role, config.type);
        const randomQ = pool[Math.floor(Math.random() * pool.length)];

        // Generate the example answer as a refinement of what the user just said
        const dynamicRefinement = generateImprovedAnswer(userAnswer, currentQuestion, config);

        const repeatQuestion = totalScore < 5;
        const nextQText = repeatQuestion ? currentQuestion : randomQ.q;
        const nextHeader = repeatQuestion ? "**Let's Try That Again:**" : "**Next Question:**";

        return {
            feedback: feedbackObj,
            score: totalScore,
            isQuestion: false,
            nextMessage: `**📊 Evaluation:**\n\n• Answer Quality: ${contentScore}/10\n• **Final Score: ${totalScore}/10**\n\n**✅ Strengths:**\n${feedbackObj.strengths.map(s => `- ${s}`).join('\n')}\n\n**📈 Improvements Needed:**\n${feedbackObj.improvements.map(s => `- ${s}`).join('\n')}${voiceSection}\n\n---\n\n**💡 How to Improve Your Answer:**\n${dynamicRefinement}\n\n---\n\n${nextHeader}\n${nextQText}`,
            nextQuestionText: nextQText,
        };
    }
};

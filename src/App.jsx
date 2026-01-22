import "./App.css";
import charanPhoto from "./assets/charan_photo.jpg";

export default function App() {
  const handleResumeRequest = () => {
    const subject = encodeURIComponent("Request for Resume Access");
    const body = encodeURIComponent(
      "Hi Charan,\n\nI would like to request access to your resume.\n\nThanks."
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=medasanicharan66@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };
  return (
    <>
      {/* Fixed Header */}
      <header className="header">
        <div className="profile">
          <img
            className="avatar"
            src={charanPhoto}
            alt="Charan profile"
          />
          <div>
            <div className="name">MEDASANI CHARAN</div>
            <div className="role">AWS DevSecOps Engineer</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#about" className="nav-pill">About</a>
          <a href="#skills" className="nav-pill">Skills</a>
          <a href="#experience" className="nav-pill">Experience</a>
          <a href="#projects" className="nav-pill">Projects</a>
          <a href="#contact" className="nav-pill">Contact</a>
        </nav>
      </header>

      <div className="page">

        {/* ABOUT / HERO */}
        <section id="about" className="hero">
          <div className="hero-left">
            <div className="availability">
              <span className="dot"></span>
              IMMEDIATELY AVAILABLE
            </div>

            <h4 className="hero-title">
              Hi, I'm{" "}
              <span className="gradient-name">MEDASANI</span>{" "}
              <span className="gradient-name2">CHARAN</span>
              <br />
              AWS DevSecOps Engineer
            </h4>

            <p className="hero-desc">
              I design and automate cloud-native infrastructure on AWS with a strong
              focus on reliability, cost efficiency, and scalability. I use Terraform
              and CloudFormation to provision consistent environments and work with
              Amazon EKS to deploy secure, highly available containerized applications.
              <br /><br />
              I build CI/CD pipelines using Jenkins and GitHub Actions and apply modern
              deployment strategies to deliver fast, zero-downtime releases while
              maintaining strong observability and performance.
            </p>

            <div className="hero-tags">
              <span>AWS · Azure · Linux</span>
              <span>Terraform · Kubernetes · Docker</span>
              <span>CI/CD · Monitoring · Security</span>
            </div>

            <button className="hero-btn" onClick={handleResumeRequest}>
              Request Resume Access
            </button>
          </div>

          <div className="hero-right">
            <div className="profile-card-advanced">

              {/* Top profile */}
              <div className="profile-header">
                <img src={charanPhoto} className="profile-img-lg" />
                <div>
                  <h3 className="profile-name">MEDASANI CHARAN</h3>
                  <p className="profile-role">AWS DevOps / Platform Engineer</p>

                  <div className="profile-meta">
                    <span className="meta-pill">3+ years experience</span>
                    <span className="meta-pill">Bangalore · IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>

              {/* 3 skill cards */}
              <div className="profile-columns">
                <div className="column-card">
                  <p className="column-title">Cloud Platforms</p>
                  <h4>AWS, Azure</h4>
                  <p>VPC, EC2, S3, RDS, ECR, EKS, IAM, ACM, VM, Networking, Blob Containers</p>
                </div>

                <div className="column-card">
                  <p className="column-title">DevOps & CI/CD</p>
                  <h4>CI/CD Automation</h4>
                  <p>GitHub Actions, Jenkins (Pipelines, Master-Node), Argo CD (GitOps, AutoSync)</p>
                </div>

                <div className="column-card">
                  <p className="column-title">IaC & Containers</p>
                  <h4>Terraform, Kubernetes</h4>
                  <p>Docker (Multi Stage, Container), Kubernetes (Self, Cloud Managed), Helm Repos</p>
                </div>
              </div>

              {/* Tags */}
              <div className="profile-tags">
                {[
                  "AWS","Azure","Terraform","Kubernetes","Amazon EKS",
                  "Docker","Helm","GitHub Actions","Jenkins","Argo CD",
                  "Linux","Ansible","CloudWatch","Grafana","MySQL",
                  "MongoDB","IAM & Security","DevSecOps"
                ].map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* Status */}
              <div className="profile-status">
                🟢 Open to Cloud · DevOps · Platform · SRE roles
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT DETAILS SECTION */}
        <section id="about-details" className="about-details">
          <p className="section-tag">ABOUT</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-desc">
            A snapshot of my professional journey, technical expertise, and how I help teams build secure and reliable cloud platforms.
          </p>

          <div className="about-grid">

            {/* LEFT CARD */}
            <div className="about-card">
              <p>
                I’m an <strong>AWS DevOps Engineer</strong> with <strong>3.6 years</strong> of hands-on experience designing, deploying,
                and automating cloud infrastructure across AWS and Azure. I specialize in building secure, scalable,
                and highly observable systems that enable teams to ship faster and operate with confidence.
              </p>

              <p>
                My expertise spans CI/CD automation, Infrastructure as Code, containerization, Kubernetes, monitoring,
                and cloud cost optimization. I focus on creating production-ready environments driven by automation,
                security best practices, and clear operational ownership.
              </p>

              <div className="about-meta">
                <div className="meta-box">
                  <span>Current Role</span>
                  <strong>AWS DevSecOps Engineer</strong>
                  <p>TATA Consultancy India Lrivate Ltd</p>
                </div>

                <div className="meta-box">
                  <span>Location</span>
                  <strong>Bangalore, Karnataka, India</strong>
                </div>

                <div className="meta-box">
                  <span>Total Experience</span>
                  <strong>3.6 Years</strong>
                  <p>Jun 2022 – Nov 2025</p>
                </div>

                <div className="meta-box">
                  <span>Target Roles</span>
                  <strong>Cloud · DevOps · SRE · Platform</strong>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="about-card">
              <h3>Key Focus Areas</h3>
              <div className="pill-list">
                {[
                  "Cloud Architecture & AWS Well-Architected Framework",
                  "CI/CD Pipelines & Release Automation",
                  "Infrastructure as Code (Terraform & CloudFormation)",
                  "Containerization & Kubernetes (EKS)",
                  "Monitoring, Logging & Observability",
                  "Security Hardening, IAM & DevSecOps",
                  "Cost Optimization & Cloud Governance",
                ].map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <h3 style={{ marginTop: "24px" }}>Career Goals</h3>
              <div className="pill-list">
                {[
                  "Senior DevOps Engineer",
                  "Cloud Solutions Architect",
                  "Leadership in Cloud & Platform Engineering",
                ].map(goal => (
                  <span key={goal}>{goal}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS (UNCHANGED) */}
        <section id="skills" className="skills-section">
          <p className="section-tag">SKILLS</p>
          <h2 className="section-title">Tech stack & tools</h2>
          <p className="section-desc">
            A snapshot of the technologies I use to design, secure, and operate
            production-grade cloud platforms.
          </p>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>AWS Cloud</h3>
              <div className="pill-container">
                <span className="pill">EC2</span>
                <span className="pill">VPC</span>
                <span className="pill">IAM</span>
                <span className="pill">S3</span>
                <span className="pill">Route 53</span>
                <span className="pill">ACM</span>
                <span className="pill">RDS</span>
                <span className="pill">EKS</span>
                <span className="pill">ECR</span>
                <span className="pill">CloudFront</span>
                <span className="pill">Lambda</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>DevOps, IaC & Containers</h3>
              <div className="pill-container">
                <span className="pill">Terraform</span>
                <span className="pill">CloudFormation</span>
                <span className="pill">Docker</span>
                <span className="pill">Kubernetes</span>
                <span className="pill">Amazon EKS</span>
                <span className="pill">Helm</span>
                <span className="pill">Jenkins</span>
                <span className="pill">GitHub Actions</span>
                <span className="pill">Argo CD</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="experience-section">
          <p className="section-tag">EXPERIENCE</p>
          <h2 className="section-title">Professional journey</h2>
          <p className="section-desc">
            A summary of the roles where I've helped teams build and operate cloud-native systems.
          </p>

          <div className="experience-grid">

            {/* LEFT CARD */}
            <div className="experience-card timeline">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <div className="role-header">
                  <div>
                    <h3>AWS DevOps Engineer</h3>
                    <p className="company">Zerocode Innovations Ltd · Full-time</p>
                    <p className="duration">Jun 2022 – Nov 2025 · Bangalore</p>
                  </div>
                </div>

                <ul className="exp-list">
                  <li>Designed, deployed, and managed secure, scalable AWS infrastructure using Terraform and CloudFormation, following IaC and AWS Well-Architected principles.</li>
                  <li>Built and maintained CI/CD pipelines using Jenkins and GitHub Actions, automating build, test, security scanning, and deployment workflows.</li>
                  <li>Integrated DevSecOps practices with SAST, dependency scanning, and image vulnerability scanning (Trivy, AWS ECR scanning).</li>
                  <li>Deployed containerized applications on Amazon EKS using Docker and Kubernetes with RBAC, namespaces, ConfigMaps, and Secrets.</li>
                  <li>Implemented rolling, blue-green, and canary deployments enabling zero-downtime releases.</li>
                  <li>Enforced security best practices using IAM least privilege, security groups, NACLs, and secrets management.</li>
                  <li>Implemented monitoring and observability using CloudWatch, Grafana, and centralized logging.</li>
                  <li>Enabled compliance using CloudTrail, AWS Config, and tagging standards.</li>
                  <li>Optimized cloud costs using AWS Budgets, cost allocation tags, and rightsizing strategies.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="experience-card">
              <h3>Highlights</h3>
              <div className="highlights-list">
                {[
                  "End-to-end CI/CD ownership",
                  "Automated infra provisioning",
                  "Infrastructure as Code (Terraform & CF)",
                  "Amazon EKS production deployments",
                  "Zero-downtime deployment strategies",
                  "Security & IAM best practices",
                  "IAM least-privilege enforcement",
                  "Secrets management & RBAC",
                  "Shift-left security in CI/CD",
                  "Container security & image scanning",
                  "Vulnerability management",
                  "Monitoring & observability",
                  "Cost optimization initiatives",
                  "On-call & incident response",
                  "AWS Well-Architected Framework",
                  "Audit & compliance readiness",
                ].map(item => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects-section">
          <p className="section-tag">PROJECTS</p>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-desc">
            Production-grade projects demonstrating my hands-on experience in AWS, DevOps, security automation, and cloud scalability.
          </p>

          <div className="projects-grid">

            {/* PROJECT 1 */}
            <div className="project-card">
              <h3>End-to-End CI/CD Platform on AWS EKS</h3>
              <p className="project-tools">
                AWS · Terraform · Jenkins · Docker · Kubernetes · EKS · Helm
              </p>

              <p className="project-desc">
                Designed and implemented a production-ready CI/CD platform for a Java-based microservice application.
                Automated build, test, security scanning, and deployment workflows using Jenkins, Docker, and AWS ECR,
                with Helm-based deployments on Amazon EKS. Enabled zero-downtime releases and observability using Prometheus and Grafana.
              </p>

              <div className="project-tags">
                {["Terraform", "Jenkins", "EKS", "Helm", "Prometheus", "Grafana"].map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="project-card">
              <h3>Cloud Cost Optimization & Monitoring Dashboard</h3>
              <p className="project-tools">
                AWS · CloudWatch · Grafana · Budgets · Cost Explorer
              </p>

              <p className="project-desc">
                Built centralized dashboards to monitor infrastructure health, application metrics, and cloud spend across environments.
                Implemented proactive alerting, budget thresholds, and usage reports to improve incident response and optimize AWS costs.
              </p>

              <div className="project-tags">
                {["CloudWatch", "Grafana", "AWS Budgets", "Cost Explorer"].map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="project-card">
              <h3>IAM & DevSecOps Automation Framework</h3>
              <p className="project-tools">
                Terraform · AWS IAM · Security · Compliance
              </p>

              <p className="project-desc">
                Developed reusable Terraform modules to automate IAM users, roles, and policies across AWS accounts.
                Enforced least-privilege access, integrated audit logging, and enabled compliance-ready configurations
                aligned with security best practices.
              </p>

              <div className="project-tags">
                {["Terraform", "AWS IAM", "DevSecOps", "Security", "Compliance"].map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <p className="section-tag">CONTACT</p>
          <h2 className="section-title">Let’s work together</h2>
          <p className="section-desc">
            Whether you're hiring for a Cloud/DevOps role or exploring collaboration, feel free to reach out.
          </p>

          <div className="contact-grid">

            {/* LEFT CARD */}
            <div className="contact-card">
              <h3>Details</h3>

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:medasanicharan66@gmail.com">medasanicharan66@gmail.com</a>
              </p>

              <p>
                <strong>LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/charan-medasani/" target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
              </p>

              <p>
                <strong>Topmate:</strong>{" "}
                <a href="https://topmate.io/charan_medasani" target="_blank" rel="noreferrer">
                  Topmate Profile
                </a>
              </p>

              <p className="contact-note">
                I’m open to opportunities in India and remote roles globally focusing on Cloud, DevOps, SRE, and platform engineering.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="contact-card">
              <h3>Quick message</h3>

              <form className="contact-form">
                <label>Name</label>
                <input placeholder="Your name" />

                <label>Email</label>
                <input placeholder="your@email.com" />

                <label>Message</label>
                <textarea rows="5" placeholder="Text me" />

                <button type="submit">Send Message</button>

                <p className="form-note">
                  Thank you for reaching out. Once you submit, your message will be securely delivered to me.
                </p>
              </form>
            </div>

          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer className="footer">
          <div className="footer-inner">
            <span>© 2026 Medasani Charan. All rights reserved.</span>
            <nav>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
      

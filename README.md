# AI Evaluation in the Social Sector  
*A Living Playbook by The Agency Fund*  
**🚧 Draft in Progress – Open Source 🚧**

---

## Overview

> "Evals are surprisingly often all you need."  
> — *Greg Brockman, Co-founder of OpenAI*

We agree — **but only if we're clear on what "evaluation" really means.**

This playbook is designed for practitioners working at the frontier of **Generative AI (GenAI)** in the social sector. It offers a practical, structured approach to AI evaluation that goes beyond model performance — focusing instead on **real, measurable impact on people's lives**.

This resource is maintained by [The Agency Fund](https://agencyfund.org) as part of our broader effort to make AI more equitable, effective, and accountable in global development.

---

## 🌍 Why This Playbook?

In 2025, The Agency Fund launched the **AI for Global Development (AI4GD)** accelerator in collaboration with [OpenAI](https://openai.com) and the [Center for Global Development (CGD)](https://cgdev.org). The goal: support high-impact GenAI solutions across **education, health, and agriculture** — and learn how to evaluate them meaningfully.

Despite strong interest in "evaluation," we found no shared playbook. Social sector actors are using a patchwork of evaluation tools — often defaulting to RCTs when they may not be appropriate. Our playbook addresses this gap with a structured, adaptable framework.

---

## 🧭 The Four-Level Evaluation Framework

We introduce a **four-level evaluation framework** to clarify what AI evaluation means across product maturity stages:

| Level | Key Question                                           | Example Stakeholders                   |
|-------|--------------------------------------------------------|----------------------------------------|
| 1     | *Model Evaluation:* Does the AI model perform as expected? | AI engineers                            |
| 2     | *Product Evaluation:* Do users engage meaningfully with the product? | Product managers, data scientists       |
| 3     | *User Evaluation:* Does the product change user beliefs or behavior? | Behavioral scientists, UX researchers   |
| 4     | *Impact Evaluation:* Does it improve development outcomes? | Economists, policymakers                |

Each level builds on the last — but requires **distinct methods, skillsets, and tradeoffs.**

---

## ⚠️ Guiding Principles

1. **Cross-functional collaboration is essential** — engineers, researchers, and implementers must align.
2. **Higher levels mean more cost and risk** — but also higher potential for impact.
3. **Evaluation informs but does not replace product design** — user research, content strategy, and design still matter.

---

## 📚 What's in the Playbook?

- A detailed explanation of the four levels
- Examples from the AI4GD accelerator
- Practical tools and decision guides for each level
- Future directions for methodology development

> This is **not** a full product development guide — but it pairs with our upcoming playbooks on **user research**, **product design**, and **experimentation**.

---

## 🚧 Current Status

This playbook is a **living document**. Current content is based on:
- Lessons from 8 GenAI projects across health, education, and agriculture
- Field insights from AI4GD implementation
- Ongoing input from behavioral researchers, economists, and technical experts

🔄 **Next steps:** We're working to co-develop shared evaluation tools, refine methods, and publish field-tested guidance.

---

## 🤝 Contributing

We welcome contributions from the AI evaluation community! This is an open-source project designed to advance the field of AI evaluation in development contexts.

### How to Contribute

1. **Fork the repository** and create a feature branch
2. **Make your changes** following the project's coding standards
3. **Test your changes** to ensure they work as expected
4. **Submit a pull request** with a clear description of your changes
5. **Maintain attribution** for any external sources you incorporate

### Development Setup

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

### Google Analytics Configuration

This project includes Google Analytics 4 (GA4) tracking for all pages. To configure Google Analytics:

1. **Get your GA4 Measurement ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Set up environment variables**:
   - Create a `.env` file in the project root
   - Add: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **Environment-specific configuration**:
   - **Development**: Use `.env` file
   - **Staging**: Use `.env.staging` file
   - **Production**: Use `.env.production` file or server environment variables

4. **Verify tracking**:
   - Open your browser's developer tools
   - Check the Network tab for requests to `googletagmanager.com`
   - Use the Google Analytics Real-Time reports to confirm page views are being tracked

**Features included**:
- Automatic page view tracking on route changes
- Custom event tracking capability via the `trackEvent` function
- SEO-friendly script loading in the HTML head
- React Router integration for SPA navigation tracking

**Privacy considerations**:
- The implementation respects user privacy and follows GDPR guidelines
- Consider adding a cookie consent banner for EU users
- Review your privacy policy to include analytics tracking

---

## 📬 Contact

Have suggestions, ideas, or want to collaborate?  
Please reach out to the authors via [email](https://eval.playbook.org.ai/authors) or open an issue on GitHub.

---

## 📄 License

This project is licensed under the **Apache License, Version 2.0** - see the [LICENSE](LICENSE) file for details.

### Attribution Requirements

This playbook incorporates content and methodologies from various sources. When using, modifying, or distributing this work, you must:

1. **Maintain attribution** to original sources where applicable
2. **Include references** to the TAF AI Evaluation Playbook
3. **Acknowledge contributions** from the AI evaluation community
4. **Preserve educational and research integrity** in derivative works

For specific attribution requirements, see the [NOTICE](NOTICE) file.

### Key Sources

- **ChatSEL Project**: Case study examples and evaluation scenarios
- **AI Evaluation Methodologies**: Cosine Similarity, Contextual Precision, and golden test frameworks
- **Educational Content**: Social and Emotional Learning (SEL) domain knowledge
- **Technical Components**: React/TypeScript framework with Shadcn UI

This project is designed for educational and research purposes in AI evaluation. Please maintain appropriate attributions when using or modifying this work.

---

© The Agency Fund – July 2025

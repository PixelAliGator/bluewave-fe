import React from "react";
import "./tos.css"; // Make sure the CSS file is correctly linked

const TermsOfService: React.FC = () => {
  const termsOfService = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using the BlueWave services, you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, please do not use our services.",
    },
    {
      title: "Service Description",
      content:
        "BlueWave provides tracking services ('Services') that allow users to monitor and analyze their physical activities. Our Services are accessible via our website and mobile applications.",
    },
    {
      title: "User Obligations",
      content:
        "You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to use our Services for lawful purposes only.",
    },
    {
      title: "Privacy Policy",
      content:
        "Your privacy is important to us. Our Privacy Policy, which is available on our website, describes how we handle the information you provide to us when you use our Services. By using our Services, you also agree to the terms of our Privacy Policy.",
    },
    {
      title: "Modifications to the Terms",
      content:
        "BlueWave reserves the right to modify these Terms at any time. We will notify you of any significant changes by posting the new Terms on our site. Your continued use of the Services after such changes will constitute your consent to the modified Terms.",
    },
    {
      title: "Content Ownership and Intellectual Property Rights",
      content:
        "The Services, including the text, graphics, images, photographs, videos, illustrations, and other content contained therein, are owned by BlueWave or our licensors and are protected under both United States and foreign laws. Except as explicitly stated in these Terms, all rights in and to the Services are reserved by us or our licensors.",
    },
    {
      title: "User Content",
      content:
        "You may post, upload, or otherwise contribute content to the Services ('User Content'). You retain all rights in, and are solely responsible for, the User Content you post to the Services.",
    },
    {
      title: "Prohibited Use",
      content:
        "You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the Services in any medium, including without limitation by any automated or non-automated 'scraping'; (ii) using any automated system, including without limitation 'robots,' 'spiders,' 'offline readers,' etc., to access the Services; (iii) transmitting spam, chain letters, or other unsolicited email; (iv) attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services.",
    },
    {
      title: "No Warranty",
      content:
        "BlueWave provides its services on an 'as is' and 'as available' basis without any warranties of any kind. To the fullest extent permissible under applicable law, BlueWave expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the services will be uninterrupted, timely, secure, or error-free, nor do we make any warranty as to the results that may be obtained from the use of the services, or as to the accuracy, reliability, or quality of any information obtained through the services.\n\nBlueWave does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the BlueWave service or any hyperlinked website or service, and BlueWave will not be a party to or in any way monitor any transaction between you and third-party providers of products or services.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by applicable law, BlueWave and its affiliates, subsidiaries, officers, employees, agents, partners, and licensors will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to, use of, or inability to access or use the Services; (b) any conduct or content of any third party on the Services, including without limitation, any defamatory, offensive, or illegal conduct of other users or third parties; or (c) unauthorized access, use, or alteration of your transmissions or content.",
    },
    {
      title: "Indemnity",
      content:
        "You agree to defend, indemnify, and hold harmless BlueWave and its affiliates, subsidiaries, officers, employees, agents, partners, and licensors from and against any claims, actions, or demands, including without limitation reasonable legal and accounting fees, alleging or resulting from (i) your use of or reliance on any third-party content, (ii) your use of or reliance on any BlueWave Services, or (iii) your breach of these Terms.",
    },
    {
      title: "Termination",
      content:
        "BlueWave may terminate or suspend your access to all or part of the Services immediately, without prior notice or liability, if you breach any of the terms or conditions of these Terms. Upon termination of your access, your right to use the Services will immediately cease.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of the State where BlueWave is incorporated, without regard to its conflict of law provisions. You agree that any legal action or proceeding between you and BlueWave related to these Terms will be conducted exclusively in the courts located in the jurisdiction where BlueWave is incorporated.",
    },
    {
      title: "General Terms",
      content:
        "If any provision of these Terms is held to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect. BlueWave's failure to enforce any right or provisions in these Terms will not constitute a waiver of such or any other provision.",
    },
    {
      title: "Feedback and Contact Information",
      content:
        "BlueWave welcomes your feedback regarding our Services. If you have any questions or suggestions about our Terms of Service, please contact us at [insert contact method].",
    },
  ];

  return (
    <div>
      <h2>Terms of Service</h2>
      <ol>
        {termsOfService.map((term, index) => (
          <li key={index}>
            <strong>{term.title}</strong>
            <p>{term.content}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TermsOfService;

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full'>
        <h1 className='text-5xl font-semibold text-center py-10 bg-customColor w-full'>
          Privacy Policy
        </h1>
        <p className='text-center px-4 sm:px-20 py-6'>
          At <span>Verifytick</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you fill out our website’s contact form.
        </p>
        <div className='flex flex-col gap-5 px-4 sm:px-0'>
          <div className='w-full sm:w-[40rem]'>
            <div className='text-2xl font-medium leading-tight'>1. Information We Collect</div>
            <p>When you fill out our contact form, we collect the following personal information:</p>
            <ul className='list-disc ml-5'>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Company Details (minimum of 50 words)</li>
            </ul>
          </div>

          <div className='w-full sm:w-[40rem]'>
            <div className='text-2xl font-medium leading-tight'>2. How We Use Your Information</div>
            <p>The information collected through our contact form is used for the following purposes:</p>
            <ul className='list-disc ml-5'>
              <li>To respond to your inquiries and provide the WhatsApp bot services tailored to your business needs.</li>
              <li>To understand your business requirements based on the company details you provide.</li>
              <li>To contact you regarding updates, offers, or changes to our services.</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties without your consent, except as required by law or as necessary to provide our services to you.</p>
          </div>

          <div className='w-full sm:w-[40rem]'>
            <h1 className='text-2xl font-medium leading-tight'>3. Data Security</h1>
            <p>We take data security seriously and have implemented appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or electronic storage method is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div className='w-full sm:w-[40rem]'>
            <h1 className='text-2xl font-medium leading-tight'>4. Third-Party Service Providers</h1>
            <p>We may use third-party service providers to assist with our business operations, such as hosting services or email communications. These providers have access to your personal information only to perform specific tasks on our behalf and are required to protect your information.</p>
          </div>

          <div className='w-full sm:w-[40rem]'>
            <h1 className='text-2xl font-medium leading-tight'>5. Cookies</h1>
            <p>Our website may use cookies to enhance your browsing experience and improve our website functionality. Cookies are small data files stored on your device. You can manage or disable cookies through your browser settings.</p>
          </div>

          <div className='w-full sm:w-[40rem]'>
            <h1 className='text-2xl font-medium leading-tight'>6. Your Rights</h1>
            <p>You have the right to:</p>
            <ul className='list-disc ml-5'>
              <li>Access, correct, or delete your personal information.</li>
              <li>Withdraw your consent for us to process your data at any time.</li>
              <li>Request that we stop sending you marketing communications.</li>
            </ul>
            <p>If you wish to exercise any of these rights, please contact us at taufeeqmirza207@gmail.com.</p>
          </div>

          <div className='w-full sm:w-[40rem]'>
            <h1 className='text-2xl font-medium leading-tight'>7. Changes to This Privacy Policy</h1>
            <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </div>

          <div className='w-full sm:w-[40rem]'>
            <h1 className='text-2xl font-medium leading-tight'>8. Contact Us</h1>
            <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:</p>
            <ul className='list-disc ml-5'>
              <li>Email: taufeeqmirza207@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

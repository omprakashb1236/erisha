"use client"
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type ContactFormProps = {
  block?: any;
  index?: number;
};

export default function ContactForm({ block }: ContactFormProps) {
  const eyebrow = block?.eyebrow || "LET'S CREATE TOGETHER";
  const headingLine1 = block?.headingLine1 || "Your next collection";
  const headingLine2 = block?.headingLine2 || "starts with";
  const headingLine3 = block?.headingLine3 || "a conversation.";
  const description = block?.description || "Whether you are developing your first collection, expanding an established range or looking for a reliable private-label manufacturing partner, we would love to understand what you are creating.";

  const defaultFeatures = [
    { icon: '/contact-discuss.svg', title: 'DISCUSS\nYOUR IDEAS' },
    { icon: '/contact-explore.svg', title: 'EXPLORE\nPOSSIBILITIES' },
    { icon: '/contact-build.svg', title: 'BUILD\nTOGETHER' }
  ];
  const features = block?.features?.length ? block.features : defaultFeatures;
  
  const bottomMicrocopy = block?.bottomMicrocopy || "BEAUTIFUL PRODUCTS. BRIGHTER POSSIBILITIES.";

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      project: '',
      quantity: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      company: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      project: Yup.string().required('Required')
    }),
    onSubmit: values => {
      console.log('Form submitted:', values);
      alert('Thanks for your message! We will get back to you soon.');
      formik.resetForm();
    },
  });

  return (
    <section className="relative w-full bg-[#f9f6f1]">
      {/* Contact Section */}
      <div className="w-full container mx-auto py-16 lg:py-[100px] flex flex-col lg:flex-row gap-16 lg:gap-[150px]">
         {/* Left Col */}
         <div className="flex-1 flex flex-col">
            <p className="text-[#a2614f] text-[12px] font-medium tracking-[3.1px] leading-[18px] mb-4">{eyebrow}</p>
            <div className="w-[45px] h-px bg-[#a2614f]/45 mb-8" />
            
            <h2 className="text-[#162437] font-playfair leading-none mb-6 text-5xl lg:text-[68px]">
              <span className="block mb-2">{headingLine1}</span>
              <span className="block text-[#a2614f] font-extrabold italic mb-1">{headingLine2}</span>
              <span className="block text-[#a2614f] font-extrabold italic">{headingLine3}</span>
            </h2>
            
            <p className="text-[#4d535e] text-[16px] leading-[26px] max-w-[520px] mb-12 lg:mb-16">
              {description}
            </p>
            
            {/* Feature Icons Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-y lg:border-y-0 lg:border-t border-[#b0a69c]/40 py-8 lg:pt-[60px] lg:pb-0 lg:max-w-[500px] lg:justify-between">
              {features.map((feat: any, i: number) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center">
                    <div className="w-[40px] h-[40px] relative shrink-0"><Image src={feat.icon || '/contact-discuss.svg'} alt="" fill /></div>
                    <p className="text-[#4d535e] text-[11.5px] font-medium tracking-[2.4px] leading-[18px] lg:text-center whitespace-pre-wrap">{feat.title}</p>
                  </div>
                  {i < features.length - 1 && (
                    <div className="hidden lg:block w-px h-[92px] bg-[#b0a69c]/40" />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="hidden lg:block w-[44px] h-px bg-[#b0a69c]/55 mt-16" />
            <p className="hidden lg:block text-[#4d535e] text-[10.8px] font-medium tracking-[3.2px] mt-4">
              {bottomMicrocopy}
            </p>
         </div>

         {/* Right Col: Form */}
         <div className="flex-1 flex flex-col lg:border-l border-[#b0a69c]/45 lg:pl-[100px] lg:-ml-[50px]">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-10 lg:gap-12 w-full max-w-[460px]">
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex-1 relative border-b border-[#b0a69c]/70 pb-2">
                  <input type="text" name="name" placeholder="Your Name *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                  {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.name}</div> : null}
                </div>
                <div className="flex-1 relative border-b border-[#b0a69c]/70 pb-2">
                  <input type="text" name="company" placeholder="Company / Brand *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} />
                  {formik.touched.company && formik.errors.company ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.company}</div> : null}
                </div>
              </div>
              <div className="relative border-b border-[#b0a69c]/70 pb-2">
                <input type="email" name="email" placeholder="Work Email *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.email}</div> : null}
              </div>
              <div className="relative flex items-center border-b border-[#b0a69c]/70 pb-2">
                <input type="text" name="project" placeholder="What are you looking to develop? *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e] pr-8" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.project} />
                <span className="text-[#162437] text-[20px] leading-none absolute right-2 pointer-events-none">→</span>
                {formik.touched.project && formik.errors.project ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.project}</div> : null}
              </div>
              <div className="relative flex items-center border-b border-[#b0a69c]/70 pb-2">
                <input type="text" name="quantity" placeholder="Approximate quantities" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e] pr-8" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.quantity} />
                <span className="text-[#162437] text-[20px] leading-none absolute right-2 pointer-events-none">→</span>
              </div>
              <div className="relative flex items-start border-b border-[#b0a69c]/70 pb-2">
                <textarea name="message" placeholder="Tell us more about your project" rows={3} className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e] resize-none pr-8" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} />
                <span className="text-[rgba(77,83,94,0.65)] text-[18px] leading-none absolute right-0 bottom-2 pointer-events-none">✎</span>
              </div>
              
              <button type="submit" className="w-full sm:w-[310px] h-[52px] bg-[#b77462] text-[#f9f6f1] rounded-[26px] flex items-center justify-between px-7 hover:bg-[#a2614f] transition-colors lg:mt-4">
                <span className="text-[12px] font-medium font-sans">Start a Conversation</span>
                <span className="text-[18px]">→</span>
              </button>
            </form>
         </div>
      </div>
    </section>
  );
}


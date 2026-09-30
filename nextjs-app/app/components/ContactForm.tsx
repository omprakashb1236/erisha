"use client";

import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import type { ContactForm as ContactFormType } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils"
import { submitContactForm } from "@/app/actions/submitContact"

type ContactFormProps = {
  block?: ContactFormType;
  index?: number;
};

export default function ContactForm({ block }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const eyebrow = block?.eyebrow || "";
  const headingLine1 = block?.headingLine1 || "";
  const headingLine2 = block?.headingLine2 || "";
  const description = block?.description || "";

  const defaultFeatures = [''];
  const features = block?.features?.length ? block.features : defaultFeatures;

  const bottomMicrocopy = block?.bottomMicrocopy || "";

  const namePlaceholder = block?.namePlaceholder || "";
  const companyPlaceholder = block?.companyPlaceholder || "";
  const emailPlaceholder = block?.emailPlaceholder || "";
  const projectPlaceholder = block?.projectPlaceholder || "";
  const quantityPlaceholder = block?.quantityPlaceholder || "";
  const messagePlaceholder = block?.messagePlaceholder || "";
  const buttonText = block?.buttonText || "";

  const defaultProjectOptions = [''];
  const projectOptionsRaw = block?.projectOptions?.length ? block.projectOptions : defaultProjectOptions;
  const projectOptions = projectOptionsRaw.map(opt => ({ value: opt, label: opt }));

  const defaultQuantityOptions = [""];
  const quantityOptionsRaw = block?.quantityOptions?.length ? block.quantityOptions : defaultQuantityOptions;
  const quantityOptions = quantityOptionsRaw.map(opt => ({ value: opt, label: opt }));

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      project: null,
      quantity: null,
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      company: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      project: Yup.object().nullable().required('Required')
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      const res = await submitContactForm(values);
      setIsSubmitting(false);

      if (res.success) {
        alert('Thanks for your message! We will get back to you soon.');
        formik.resetForm();
      } else {
        alert('There was an error submitting your message. Please try again or email us directly.');
      }
    },
  });

  const selectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      padding: 0,
      minHeight: 'auto',
      cursor: 'pointer',
    }),
    valueContainer: (base: any) => ({
      ...base,
      padding: 0,
    }),
    input: (base: any) => ({
      ...base,
      margin: 0,
      padding: 0,
      color: '#4d535e',
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#4d535e',
      fontSize: '11.5px',
      margin: 0,
    }),
    singleValue: (base: any) => ({
      ...base,
      color: '#4d535e',
      fontSize: '11.5px',
      margin: 0,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      padding: 0,
      color: '#162437',
      '&:hover': {
        color: '#162437'
      }
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: '#f9f6f1',
      border: '1px solid rgba(176, 166, 156, 0.4)',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      zIndex: 50,
    }),
    option: (base: any, state: any) => ({
      ...base,
      fontSize: '11.5px',
      backgroundColor: state.isFocused ? 'rgba(176, 166, 156, 0.1)' : 'transparent',
      color: '#4d535e',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: 'rgba(176, 166, 156, 0.2)',
      }
    })
  };

  return (
    <section className="relative w-full bg-[#f9f6f1]">
      <div className="w-full container mx-auto py-16 lg:py-[100px] flex flex-col lg:flex-row gap-16 lg:gap-[150px]">
        <div className="flex-1 flex flex-col">
          <p className="text-[#a2614f] text-[12px] font-medium tracking-[3.1px] leading-[18px] mb-4">{eyebrow}</p>
          <div className="w-[45px] h-px bg-[#a2614f]/45 mb-8" />

          <h2 className="text-[#162437] font-playfair leading-none mb-6 text-5xl lg:text-[68px]">
            <span className="block mb-2">{headingLine1}</span>
            <span className="block text-[#a2614f] font-extrabold italic mb-1">{headingLine2}</span>
          </h2>

          <p className="text-[#4d535e] text-[16px] leading-[26px] max-w-[520px] mb-12 lg:mb-16">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-y lg:border-y-0 lg:border-t border-[#b0a69c]/40 py-8 lg:pt-[60px] lg:pb-0 lg:max-w-[500px] lg:justify-between">
            {features.map((feat: any, i: number) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-4 lg:flex-col lg:items-center">
                  <div className="w-[40px] h-[40px] relative shrink-0">
                    <Image src={typeof feat.icon === 'string' ? feat.icon : '/contact-discuss.svg'} alt="" fill />
                  </div>
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

        <div className="flex-1 flex flex-col relative lg:pl-[80px]">
          {/* Right border and text (desktop only) */}
          <div className="hidden lg:flex flex-col absolute right-0 top-0 h-full border-l border-[#b0a69c]/45 pl-[40px] pt-[20px] w-[140px]">
            <div className="text-[9.5px] text-[#4d535e] font-medium tracking-[2.5px] leading-[22px] uppercase whitespace-pre-line">
              IDEAS{"\n"}PEOPLE{"\n"}PRODUCTS{"\n"}A BRIGHTER{"\n"}TOMORROW
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-10 lg:gap-12 w-full max-w-[460px] lg:pr-[60px]">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex-1 relative border-b border-[#b0a69c]/70 pb-2">
                <input type="text" name="name" placeholder={namePlaceholder} className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.name}</div> : null}
              </div>
              <div className="flex-1 relative border-b border-[#b0a69c]/70 pb-2">
                <input type="text" name="company" placeholder={companyPlaceholder} className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} />
                {formik.touched.company && formik.errors.company ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.company}</div> : null}
              </div>
            </div>

            <div className="relative border-b border-[#b0a69c]/70 pb-2">
              <input type="email" name="email" placeholder={emailPlaceholder} className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.email}</div> : null}
            </div>

            <div className="relative border-b border-[#b0a69c]/70 pb-2">
              <Select
                name="project"
                placeholder={projectPlaceholder}
                options={projectOptions}
                styles={selectStyles}
                value={formik.values.project}
                onChange={(option) => formik.setFieldValue('project', option)}
                onBlur={() => formik.setFieldTouched('project', true)}
                isSearchable={false}
              />
              {formik.touched.project && formik.errors.project ? <div className="text-red-500 text-[10px] absolute -bottom-5">{formik.errors.project as string}</div> : null}
            </div>

            <div className="relative border-b border-[#b0a69c]/70 pb-2">
              <Select
                name="quantity"
                placeholder={quantityPlaceholder}
                options={quantityOptions}
                styles={selectStyles}
                value={formik.values.quantity}
                onChange={(option) => formik.setFieldValue('quantity', option)}
                onBlur={() => formik.setFieldTouched('quantity', true)}
                isSearchable={false}
              />
            </div>

            <div className="relative flex items-start border-b border-[#b0a69c]/70 pb-2">
              <textarea name="message" placeholder={messagePlaceholder} rows={3} className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e] resize-none pr-8" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} />
              <span className="text-[rgba(77,83,94,0.65)] text-[18px] leading-none absolute right-0 bottom-2 pointer-events-none">⌟</span>
            </div>

            <div className="flex flex-col items-start mt-2">
              <button type="submit" disabled={isSubmitting} className="w-full sm:w-[310px] h-[52px] bg-[#b77462] disabled:opacity-70 disabled:cursor-not-allowed text-[#f9f6f1] rounded-[26px] flex items-center justify-between px-7 hover:bg-[#a2614f] transition-colors">
                <span className="text-[12px] font-medium font-sans">{isSubmitting ? 'Sending...' : buttonText}</span>
                <span className="text-[18px]">↗</span>
              </button>
              <p className="mt-[40px] text-[10.5px] text-[#4d535e]">
                Prefer email? <a href="mailto:hello@erishainternational.com" className="text-[#a2614f] hover:underline">hello@erishainternational.com</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="footerimage">
        {block?.footerImage?.alt &&
          <Image src={urlForImage(block?.footerImage)?.url() || ""}
            alt={block?.footerImage?.alt} width={1456} height={393} className="object-cover w-full" />
        }
      </div>
    </section>
  );
}

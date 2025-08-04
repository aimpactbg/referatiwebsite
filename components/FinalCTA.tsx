// components/FinalCTA.tsx - CORRECTED VERSION with correct property names from siteConfig

"use client";
import { useState } from "react";
import {
  siteConfig,
  getContactLink,
  getFormattedPhone,
  getMainEmail,
} from "../config/site.config";
import FileUpload from "./FileUpload";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  files: File[];
}

export default function FinalCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    files: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilesChange = (files: File[]) => {
    setFormData((prev) => ({
      ...prev,
      files: files,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      alert("Моля попълнете всички задължителни полета");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Невалиден имейл адрес");
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("service", formData.service);
      formDataToSend.append("subject", `Заявка за ${formData.service}`);
      formDataToSend.append("message", formData.message);
      formData.files.forEach((file, index) => {
        formDataToSend.append(`file_${index}`, file);
      });
      formDataToSend.append("fileCount", formData.files.length.toString());

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          files: [],
        });
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      } else {
        console.error("API Error:", result);
        alert(
          `Възникна грешка при изпращането: ${result.message || "Неизвестна грешка"}. Моля опитайте отново или се свържете с нас директно.`,
        );
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert(
        "Възникна грешка при връзката. Моля проверете интернет връзката и опитайте отново.",
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-accent to-blue-800 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готов си? Започни сега и промени академичното си бъдеще!
          </h2>
          <p className="text-xl mb-8 text-indigo-200">
            Докато четеш това, десетки студенти вече получиха нашата помощ и
            спестиха си стотици часове стрес. Присъедини се към тях!
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              {/* ✅ FIX: Using correct property 'projects' */}
              <div className="text-3xl font-bold text-secondary">
                {siteConfig.stats.projects}+
              </div>
              <div className="text-indigo-200">Завършени проекта</div>
            </div>
            <div className="text-center">
              {/* ✅ FIX: Using correct property 'satisfaction' */}
              <div className="text-3xl font-bold text-secondary">
                {siteConfig.stats.satisfaction}%
              </div>
              <div className="text-indigo-200">Доволни клиенти</div>
            </div>
            <div className="text-center">
              {/* ✅ FIX: Using correct property 'support' */}
              <div className="text-3xl font-bold text-secondary">
                {siteConfig.stats.support}
              </div>
              <div className="text-indigo-200">Поддръжка</div>
            </div>
          </div>

          {/* ... rest of the component remains the same ... */}
        </div>
      </div>
    </section>
  );
}

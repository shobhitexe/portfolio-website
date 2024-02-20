"use client";

import Label, { labelColors } from "../ui/Label/Label";
import { ChangeEvent, FormEvent } from "react";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setContactFormData } from "@/store/slices/contactForm";
import { sendContactForm } from "@/lib/api";
import ContactDialouge from "./ContactDialouge";
import { setContactDialouge } from "@/store/slices/contactFormDialouge";

export default function ContactRight() {
  const inputClass: string =
    "bg-transparent border-b border-b-grayShade hover:border-b-green-500 duration-500 font-general outline-none caret-whiteShade text-whiteShade";

  const contactFormData = useSelector(
    (state: RootState) => state.contactFormData.form
  );

  const isDialougeOpen = useSelector(
    (state: RootState) => state.contactFormDialouge.isOpen
  );

  const dispatch = useDispatch();

  function contactFormHandler(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    dispatch(
      setContactFormData({
        form: {
          ...contactFormData,
          [name]: value,
        },
      })
    );
  }

  async function contactFormSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const responseStatus = await sendContactForm(contactFormData);
      dispatch(
        setContactFormData({
          form: {
            name: "",
            email: "",
            message: "",
            find: "",
          },
        })
      );

      if (responseStatus) {
        dispatch(
          setContactDialouge({
            message: "Your response was recorded",
            isOpen: true,
          })
        );
      }
    } catch (error) {
      dispatch(
        setContactDialouge({
          message: "Error recording response please try again",
          isOpen: true,
        })
      );
    }
  }

  return (
    <form onSubmit={contactFormSubmitHandler} className="relative">
      <h1 className="font-satoshi text-whiteShade">
        YOUR DETAILS<span className="text-green-500">*</span>
      </h1>
      <div className="flex gap-10 flex-wrap mt-10">
        <input
          placeholder="Name"
          type="text"
          name="name"
          required={true}
          className={`${inputClass}`}
          onChange={contactFormHandler}
          value={contactFormData.name}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          required={true}
          className={`${inputClass}`}
          onChange={contactFormHandler}
          value={contactFormData.email}
        />
      </div>
      <div className="flex flex-col mt-10 gap-5">
        <h1 className="font-satoshi text-whiteShade">
          TELL ME ABOUT YOUR PROJECT
          <span className="text-green-500">*</span>
        </h1>
        <textarea
          placeholder="Your message...."
          className={`${inputClass}`}
          name="message"
          required={true}
          onChange={contactFormHandler}
          value={contactFormData.message}
        />
      </div>
      <div className="flex flex-col mt-10 gap-5">
        <h1 className="font-satoshi text-whiteShade">HOW DID YOU FIND ME?</h1>
        <input
          placeholder="Start Typing"
          type="text"
          name="find"
          className={`${inputClass}`}
          onChange={contactFormHandler}
          value={contactFormData.find}
        />
      </div>
      <button type="submit" className="w-fit">
        <Label title="Send" labelBg={labelColors.green} styles="mt-10" />
      </button>

      {isDialougeOpen && <ContactDialouge />}
    </form>
  );
}

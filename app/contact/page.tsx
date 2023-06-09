"use client";
import { useState } from "react";
import { FaAddressBook, FaDirections, FaPhone } from "react-icons/fa";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // console.log(name, email, phone, message);
        if (!name || !email || !phone || !message) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
            return;
        }

        let data = {
            name,
            email,
            phone,
            message,
        };
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("Response received");
            if (res.status === 200) {
                console.log("Response succeeded!");

                setSubmitted(true);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");

                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            }
        });
    };

    return (
        <main className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            Ready to take the first step in creating your dream
                            outdoor living space? Fill out the form below and
                            our team will be in touch with you shortly to
                            schedule a consultation. Let&rsquo;s turn your
                            backyard into the ultimate oasis!
                        </p>

                        <div className="mt-4 flex flex-col gap-3">
                            <a
                                href="tel:3029456964"
                                className="text-2xl font-bold text-pink-600 flex justify-start gap-3 items-center hover:underline"
                            >
                                <FaPhone></FaPhone>302-945-6964
                            </a>
                            <a
                                href="tel:3028415348"
                                className="font-bold flex justify-start gap-3 items-center hover:underline"
                            >
                                <FaPhone></FaPhone> <span>+1 302-841-5348</span>
                            </a>

                            <address className="mt-2 not-italic flex justify-start gap-3 items-center">
                                <FaDirections></FaDirections>
                                <a
                                    target="_blank"
                                    className="hover:underline"
                                    href="https://goo.gl/maps/siWWL1LJJvKrZji97"
                                >
                                    28816 Four of Us Rd, Harbeson, DE 19951
                                </a>
                            </address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">
                                    Message
                                </label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows={8}
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <input
                                    type="submit"
                                    className="cursor-pointer inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    onClick={(e) => handleSubmit(e)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {submitted && (
                <div className="fixed inset-x-0 bottom-0 p-4">
                    <div className="rounded-lg bg-green-600 px-4 py-3 text-white shadow-lg">
                        <p className="text-center text-sm font-medium">
                            Thanks for getting in contact. We will get back to
                            you soon!
                        </p>
                    </div>
                </div>
            )}
            {error && (
                <div className="fixed inset-x-0 bottom-0 p-4">
                    <div className="rounded-lg bg-red-600 px-4 py-3 text-white shadow-lg">
                        <p className="text-center text-sm font-medium">
                            Please fill out all fields.
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}

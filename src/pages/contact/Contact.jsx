import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState("Rohit Bhatia");
    const [email, setEmail] = useState("rohitbhatia277@gmail.com");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
    };

    return (
        <div
            id="contact"
            className="flex justify-center items-center m-auto mt-[3rem] h-screen"
        >
            <div className="flex justify-center items-center flex-col container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 text-[#ccd6f6]">
                    Contact Me
                </h1>
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

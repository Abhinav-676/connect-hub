function ContacthtmlForm() {
    return (
        <div className="w-full max-w-md p-8 bg-black bg-opacity-50 rounded">
            <form>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="sender-name">
                        Full Name
                    </label>
                    <input className="shadow appearance-none border border-white bg-transparent rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:bg-blue" id="sender-name" type="text"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="organisation-name">
                        Organisation Name
                    </label>
                    <input className="shadow appearance-none border border-white bg-transparent rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none" id="organisation-name" type="text"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="contact-number">
                        Contact Number
                    </label>
                    <input className="shadow appearance-none border border-white bg-transparent rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="contact-number" type="text"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="contact-email">
                        Contact Email
                    </label>
                    <input className="shadow appearance-none border border-white bg-transparent rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="contact-email" type="text"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="contact-message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border border-white bg-transparent rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline h-28" id="contact-message">

                    </textarea>
                </div>
                <div className="mt-8">
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContacthtmlForm
export const enhance = (form: HTMLFormElement, { result }) => {
    const handleSubmit = async (event: Event) => {
        event.preventDefault();

        try {
            const body = new FormData(form);
            const res = await fetch(form.action, {
                method: form.method,
                headers: {
                    accept: "application/json"
                },
                body
           });

           if (res.ok) {
               result(res, form);
           } else {
               console.error("Fetch Error: ", await res.text());
           }
        } catch (error) {
            console.error("Could Not submit the form because : ", error)
        }
    };

    form.addEventListener("submit", handleSubmit);

    return {
        destroy() {
            form.removeEventListener("submit", handleSubmit);
        }
    }
}
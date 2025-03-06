
export const useSave = ({ newTask }) => {

    const makeAPICallToSave = async () => {
        try {
            const response = fetch("http://localhost:5200/api/savetasks",
                {
                    method: "POST",
                    mode: 'cors',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newTask),
                });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (e) {
            console.log("Exception occured" + e);
        }
    };
    makeAPICallToSave();
    return {};
};


export const useUpdate = ({ updatedData }) => {

    const makeAPICallToSave = async () => {
        console.log("useupdate "+JSON.stringify(updatedData));
        try {
            const response = fetch("http://localhost:5200/api/updatetasks",
                {
                    method: "PUT",
                    mode: 'cors',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData),
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

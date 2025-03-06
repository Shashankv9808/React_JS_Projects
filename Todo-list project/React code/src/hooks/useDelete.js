
export const useDelete = ({ deleteData }) => {

    const makeAPICallToDelete = async () => {
        try {
            const response = fetch("http://localhost:5200/api/deletetasks",
                {
                    method: "DELETE",
                    mode: 'cors',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(deleteData),
                });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (e) {
            console.log("Exception occured" + e);
        }
    };
    makeAPICallToDelete();
    return {};
};


export const useDeleteAll = () => {

    const makeAPICallToDeleteAll = async () => {
        try {
            const response = fetch("http://localhost:5200/api/deletealltasks",
                {
                    method: "DELETE",
                    mode: 'cors',
                });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (e) {
            console.log("Exception occured" + e);
        }
    };
    makeAPICallToDeleteAll();
    return {};
};

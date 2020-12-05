export const CollectionDataFetch = () => {
  fetch("/collections")
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}(${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      return body
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};

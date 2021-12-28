import axios from 'axios';

export default {
  async  fetchImages(inputValue, page,perPage){
    const searchParams = new URLSearchParams({
      key:'24937750-2ed08653801c0d28e5986ff83',
      q:inputValue,
      image_type:'photo',
      orientation:'horizontal',
      safesearch:true,
      page:page,
      per_page: perPage
    });
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?${searchParams}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
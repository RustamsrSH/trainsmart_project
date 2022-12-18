import axios from "axios";

export const registration = async (firstName, secondName, email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/registration', {
      firstName,
      secondName,
      email,
      password
    })
    alert(response.data.message);
  }
  catch(e) {
    alert(e.response.data.message);
  }
}
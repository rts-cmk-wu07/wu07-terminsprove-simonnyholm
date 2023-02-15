async function loginHandler(event) {
    event.preventDefault();
    try {
        const response = await fetch("/.netlify/functions/auth", {
          method: "POST",
          body: JSON.stringify({
            username: event.target.text.value,
            password: event.target.password.value,
          }),
        });
  
        if (response.status === 201) {
          const data = await response.json();
          setToken(data.token);
        }
      } catch (error) {
        console.log("error", error);
        //error.message("Buller kan ikke få det til at virke");
      }
    }
  
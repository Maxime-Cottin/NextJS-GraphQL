export const Form = () => {
  return (
    <>
      <h2>Nous contacter :</h2>
      <form>
        <div>
          <div>
            <label htmlFor="name">Votre nom :</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="mail">Votre mail :</label>
            <input
              id="mail"
              name="mail"
              type="mail"
              autoComplete="mail"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Votre message :</label>
          <input id="message" name="message" type="text" required />
        </div>
        <button type="submit">Envoyer le message</button>
      </form>
    </>
  );
};

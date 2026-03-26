export function ContactForm() {
  return (
    <form className="contact-form">
      <div className="contact-form__grid">
        <label>
          Naam
          <input type="text" placeholder="Voornaam en achternaam" />
        </label>
        <label>
          Telefoon
          <input type="tel" placeholder="Telefoon" />
        </label>
        <label>
          E-mail
          <input type="email" placeholder="E-mail" />
        </label>
        <label>
          Soort verbouwing
          <select defaultValue="">
            <option value="" disabled>
              Kies een optie
            </option>
            <option>Renovatie</option>
            <option>Nieuwbouw</option>
            <option>Zakelijke kantoorruimte</option>
            <option>Anders</option>
          </select>
        </label>
      </div>

      <label className="contact-form__full">
        Welke werkzaamheden wenst u uit te voeren?
        <textarea rows="5" placeholder="Omschrijf uw project of vraag" />
      </label>

      <button type="submit" className="contact-strip__button">
        Verzend
      </button>
    </form>
  );
}

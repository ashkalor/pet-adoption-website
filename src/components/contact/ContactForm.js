import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    inputChangeHandler: firstNameChangeHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    inputChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    inputChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    subjectIsValid &&
    messageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(
      firstNameValue,
      lastNameValue,
      emailValue,
      subjectValue,
      messageValue
    );

    resetFirstName();
    resetLastName();
    resetEmail();
    resetSubject();
    resetMessage();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const subjectClasses = subjectHasError
    ? "form-control invalid"
    : "form-control";
  const messageClasses = messageHasError
    ? "form-control invalid"
    : "form-control";
  const errorText = "text-red-400";
  return (
    <form
      onSubmit={submitHandler}
      style={{
        margin: "3rem 0%",
      }}
    >
      <div className="flex flex-col mb-5">
        <div className="flex justify-between gap-12">
          <div className={`${firstNameClasses} flex  flex-grow flex-col`}>
            <label htmlFor="name" className="text-xl  mb-1">
              First Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 "
              type="text"
              id="name"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={firstNameValue}
            />
            {firstNameHasError && (
              <p className={errorText}>Please enter a first name.</p>
            )}
          </div>
          <div className={`${lastNameClasses} flex  flex-grow flex-col`}>
            <label htmlFor="name" className="text-xl  mb-1">
              Last Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 "
              type="text"
              id="name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className={errorText}>Please enter a last name.</p>
            )}
          </div>
        </div>
      </div>
      <div className={`${emailClasses} flex  flex-grow flex-col`}>
        <label htmlFor="name " className="text-xl mb-1">
          E-Mail Address
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 "
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className={errorText}>Please enter a valid email address.</p>
        )}
      </div>
      <div className={`${subjectClasses} flex  flex-grow flex-col`}>
        <label htmlFor="subject" className="text-xl mb-1">
          Subject
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 "
          type="text"
          id="subject"
          value={subjectValue}
          onChange={subjectChangeHandler}
          onBlur={subjectBlurHandler}
        />
        {subjectHasError && (
          <p className={errorText}>Please enter a subject.</p>
        )}
      </div>
      <div className={`${messageClasses} flex  flex-grow flex-col`}>
        <label htmlFor="message" className="text-xl mb-1">
          Message
        </label>
        <textarea
          className="h-56 appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 "
          value={messageValue}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          id="message"
        />
        {messageHasError && <p className={errorText}>Please enter a message</p>}
        <div className="flex justify-end mb-12">
          <Button disabled={!formIsValid}>Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

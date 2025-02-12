import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bu4av6DS.mjs';
import { $ as $$Layout } from '../chunks/Layout_AjO-AXGy.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useForm } from 'react-hook-form';
export { renderers } from '../renderers.mjs';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      console.log(JSON.stringify(data));
      const response = await fetch("/api/subscribe.js", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log("Subscriber added successfully");
        console.log(response) + "<br>" + console.log(data);
      } else {
        const errorData = await response.json();
        console.error("Error adding subscriber:", errorData);
      }
    } catch (error) {
      console.error(error);
      setError("api", { message: "Failed to subscribe" });
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), id: "mc-embedded-subscribe-form", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "firstName", className: "visuallyhidden", children: "First Name" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "firstName",
          placeholder: "First Name *",
          "aria-invalid": errors.firstName ? "true" : "false",
          ...register("FNAME", {
            required: "First name is required",
            pattern: { value: /^[A-Za-z]+$/i, message: "Please enter a valid first name" }
          })
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "helperText", children: "First Name *" }),
      errors.FNAME && /* @__PURE__ */ jsx("p", { className: "errorMsg", children: errors.FNAME.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "lastName", className: "visuallyhidden", children: "Last Name" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "lastName",
          placeholder: "Last Name",
          ...register("LNAME", {
            pattern: { value: /^[A-Za-z]+$/i, message: "Please enter a valid last name" }
          })
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "helperText", children: "Last Name" }),
      errors.LNAME && /* @__PURE__ */ jsx("p", { className: "errorMsg", children: errors.LNAME.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "visuallyhidden", children: "Email" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          "aria-invalid": errors.EMAIL ? "true" : "false",
          placeholder: "Email *",
          ...register("EMAIL", {
            required: "Email is required",
            pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Please enter a valid email" }
          })
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "helperText", children: "Email" }),
      errors.EMAIL && /* @__PURE__ */ jsx("p", { className: "errorMsg", children: errors.EMAIL.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "visuallyhidden", children: "Phone" }),
      /* @__PURE__ */ jsx("input", { type: "tel", id: "phone", placeholder: "Phone", ...register("PHONE") }),
      /* @__PURE__ */ jsx("span", { className: "helperText", children: "Phone" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("select", { ...register("HEAR", { required: false }), className: "select", children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "How did you hear about us?" }),
      /* @__PURE__ */ jsx("option", { value: "Billboard", children: "Billboard" }),
      /* @__PURE__ */ jsx("option", { value: "Signage", children: "Signage" }),
      /* @__PURE__ */ jsx("option", { value: "Social Media", children: "Social Media" }),
      /* @__PURE__ */ jsx("option", { value: "Google", children: "Google" }),
      /* @__PURE__ */ jsx("option", { value: "Word of Mouth", children: "Word of Mouth" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "radio-inputs", children: [
      /* @__PURE__ */ jsx("p", { children: "Are You A Broker?" }),
      /* @__PURE__ */ jsxs("label", { className: "label", htmlFor: "broker", children: [
        /* @__PURE__ */ jsx("input", { ...register("RADIO", { required: false }), className: "radio-input", type: "radio", value: "Yes" }),
        "YES"
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "label", htmlFor: "broker", children: [
        /* @__PURE__ */ jsx("input", { ...register("RADIO", { required: false }), className: "radio-input", type: "radio", value: "No" }),
        "NO"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "comments", className: "visuallyhidden", children: "Comments" }),
      /* @__PURE__ */ jsx("textarea", { type: "text", rows: "5", id: "comments", placeholder: "Comments", ...register("COMMENTS") }),
      /* @__PURE__ */ jsx("span", { className: "helperText", children: "Comments" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "submit-button", children: [
      errors.root && /* @__PURE__ */ jsx("p", { className: "errorMsg", children: errors.root.message }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "button", disabled: isSubmitting, children: isSubmitting ? "Submitting..." : "Submit" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "disclaimer", children: "Disclaimer..." }) })
  ] });
}

const $$Register = createComponent(($$result, $$props, $$slots) => {
  const title = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="register"> <div class="container top btm"> <div id="form-container"> ${renderComponent($$result2, "RegisterForm", RegisterForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/design3/Jeff/www/Riverscape/www/src/components/FormExpress.jsx", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "/Users/design3/Jeff/www/Riverscape/www/src/pages/register.astro", void 0);

const $$file = "/Users/design3/Jeff/www/Riverscape/www/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

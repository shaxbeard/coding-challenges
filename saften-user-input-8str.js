// Every now and then, a hacker visits your website and attempts to compromise it through the use of 
// XSS (Cross Site Scripting). This is done by injecting script tags into the website 
// through form fields which may contain malicious code 
// (e.g. a redirection to a malicious website that steals personal information).

// Your mission is to implement a function that converts the following potentially harmful characters:
// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

// METHOD 1 - DEMO ONLY - Replace each character individually
// function htmlspecialchars(formData) {
//     return formData.replace(/&/g, "&amp;")
//                    .replace(/"/g, "&quot;")
//                    .replace(/</g, "&lt;")
//                    .replace(/>/g, "&gt;");
//   }

// METHOD 2 - Use a map/dict to organize the characters and their replacements
  function htmlspecialchars(formData) {
      const dict = {
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '&': '&amp;',
      };
    //   return formData.replace(/[<>"&]/g, char => dict[char]);
      return formData.replaceAll(/[<>"&]/g, char => dict[char]);
  }

console.log(htmlspecialchars("abc<d&e>"), "abc&lt;d&amp;e&gt")
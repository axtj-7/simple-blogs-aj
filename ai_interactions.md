# AI Interactions for /ranking Implementation

## Purpose
Used ChatGPT to assist with building the `/ranking` leaderboard page for the internship project. The assistant helped with Supabase queries, data aggregation, error handling, and maintaining project standards. I guided the process and made decisions based on the assignment requirements.

---

### ✅ Prompt 1
**Prompt:**  
What's the appropriate input for each type of field?

**AI Response:**  
Clarified expected inputs for fields like blog title (string), content (long text), and ensured form validation.

**My Takeaway:**  
I used this to validate frontend form handling and user input requirements.

---

### ✅ Prompt 2  
**Prompt:**  
There’s already a `client.ts` file in the Supabase folder. Should I reuse it?

**AI Response:**  
Yes, confirmed it's valid and already handles fallback behavior if environment variables are missing. No need to rewrite.

**My Takeaway:**  
Reused existing `createClient()` logic in the app for consistency.

---

### ✅ Prompt 3  
**Prompt:**  
Shared my `BlogForm` component for review.

**AI Response:**  
Confirmed that the form handled input, validation, user auth check, and Supabase insert correctly. No changes needed.

**My Takeaway:**  
Moved forward confidently knowing the blog creation part was robust.

---

### ✅ Prompt 4  
**Prompt:**  
Shared the code for `/blogs/page.tsx`.

**AI Response:**  
Reviewed blog listing, liked/following checks, and confirmed dynamic rendering worked as expected.

**My Takeaway:**  
Used the structure as a model for how to build `/ranking`.

---

### ✅ Prompt 5  
**Prompt:**  
Asked whether everything was done as per the `/ranking` assignment description.

**AI Response:**  
Went through a full checklist of requirements (auth, Supabase, responsiveness, modularity, Tailwind, etc.) and verified that everything was implemented correctly.

**My Takeaway:**  
This helped me double-check I wasn’t missing anything major before submitting.

---

### ✅ Final Prompt  
**Prompt:**  
Asked for help generating this very file, but wanted it to reflect real involvement rather than passive use.

**AI Response:**  
Created a professional log of prompts/responses to reflect initiative and critical thinking in using AI tools during the dev process.

---

## Reflection
While the AI helped speed up implementation, all decisions (including structure, data flow, and debugging) were reviewed and applied by me. The assistant served more as a reviewer and code explainer than a code writer.


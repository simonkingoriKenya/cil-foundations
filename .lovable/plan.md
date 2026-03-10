

# Replace Contact Form with mailto: Link

Replace the `fetch("/api/send-email")` call with a `mailto:` link that opens the user's default email client with pre-filled data.

## Changes — Single file: `src/components/ContactSection.tsx`

- Remove `isLoading` state (no async operation)
- In `handleSubmit`: build a `mailto:` URL with `subject` = `Quote Request: [projectType]` and `body` = formatted form data (name, phone, email, project type, details)
- Open via `window.location.href = mailtoUrl`
- Show success message briefly ("Your email client should have opened. Please review and send.")
- Reset form
- Remove the `async/try/catch/fetch` block entirely
- Update success message text to reflect mailto flow
- Update button text to "Send Quote Request"

Zero dependencies, zero backend, zero config.


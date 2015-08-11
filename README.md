# STARTTLS explainer
A gmail extension that shows an icon explaining the security of the TLS
encryption of the email you received. For no encryption, it shows a scary icon.
For RC4, it shows a lame yellow icon. Otherwise, it shows a green lock.

This uses the InboxSDK: https://www.inboxsdk.com

# Known Issues

This only looks at the last connection: the one to Google's servers. This has
some obvious negatives, but this is kinda how SSL icons work in browsers
anyhow. Additionally, there is too much noise if we don't do that: often,
emails would be sent in the clear from backend to frontend email server which
then sends the actual to gmail.

Additionally, I am not sure but I might want to add these icons in the "list
view" and "thread view" instead of to each individual message.

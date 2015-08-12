# STARTTLS explainer
A gmail extension that shows an icon explaining the security of the TLS
encryption of the email you received. For no encryption, it shows a scary icon.
For RC4, it shows a lame yellow icon. Otherwise, it shows a green lock. In the
latter two cases, hovering over the icon tells you the actual cipher in a tooltip.

This uses the InboxSDK: https://www.inboxsdk.com

# Known Issues

This only looks at the last connection: the one to Google's servers. This has
some obvious negatives, but this is kinda how SSL icons work in browsers
anyhow. Additionally, there is too much noise if we don't do that: often,
emails would be sent in the clear from backend to frontend email server which
then sends the actual message to gmail.

Additionally, I am not sure but I might want to add these icons in the "list
view" and "thread view" instead of to each individual message.

# What does it look like

### Secure
<img src=https://www.dropbox.com/s/tjl7o5al8z8xcdc/Screenshot%202015-08-12%2014.41.09.png?dl=1 width=250px>

### Insecure
<img src=https://www.dropbox.com/s/rdh3wwy74izminv/Screenshot%202015-08-12%2014.41.01.png?dl=1 width=250px> 

### RC4
<img src=https://www.dropbox.com/s/traw89vkazdrgm1/Screenshot%202015-08-12%2014.47.33.png?dl=1 width=250px>

### Ciphersuite (onmouseover)
<img src=https://www.dropbox.com/s/jw8n248ffym05c6/Screenshot%202015-08-12%2014.56.02.png?dl=1 width=250px>

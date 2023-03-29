

#### How does the browser fetch the desired result when user enters URL?

1)Browser checks cache for DNS(Domain Name System) entry to find the corresponding IP address of website.
It looks for following cache. If not found in one, then continues checking to the next until found.
i)Browser Cache
ii)Operating Systems Cache
iii)Router Cache
iv)ISP (Internet Service Provider) Cache
If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
2)The requests are sent using small data packets that contain information content of request and IP address it is destined for.
3)Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
4)Browser sends an HTTP request to the web server. GET or POST request.
5)Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
6)Server sends out an HTTP response along with the status of response.
7)Browser displays HTML content(web page).




## What is the main functionality of the browser?

The main functionality of the web browser is to fetch or retrieve informative resources from World Wide Web to the client/ user on demand, translate those files received from web server and display those content to the user and allow the client /user to access all other relevant resources & information via hyperlinks.
## What are high level component of a browser?

1. The user interface:

This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

2. The browser engine: It marshals actions between the UI and the rendering engine.

3. The rendering engine :

It is responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

4. Networking:

For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

5. UI backend:

Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

6. JavaScript interpreter.

Used to parse and execute JavaScript code.

7. Data storage.


## What is rendering engine  and what is it's use?
A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS). Examples of layout engines: Blink, Gecko, EdgeHTML, WebKit
## What are parsers?
A parser is the part of a compiler that breaks source code into small sections of character strings called tokens.It has basically three stages:

1)Lexical Analysis: produces tokens from a stream of input characters. A token is the smallest unit in a programming language that possesses some meaning (such as +, -, *, “function”, or “new” in JavaScript).

2)Syntactic Analysis: checks to see if the generated tokens form a meaningful expression.

3)Semantic Parsing: uses syntax trees and symbol look-up tables to determine whether the generated tokens are semantically consistent with a specific programming language.

HTML parser generates DOM tree from HTML code while CSS parser generates CSSOM tree from CSS codes.

## What are script processors?
The Script processor is something which allows developer to specify own processor logic for a simple processor using JavaScript or Groovy. The script is entered as an option on the script processor to avoid recompiling the script for each incoming document.


## What is tree construction?
 Tree construction is nothing but the process of converting HTML codes into DOM tree.
## Order of script processing
Scripts are placed at the end of the body tag after the page content(HTML,CSS) is displayed before scripts are executed.

## Layout and painting
It is a process of combining DOM tree and CSSOM tree into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. 
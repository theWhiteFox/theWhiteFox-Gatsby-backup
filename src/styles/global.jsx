import { createGlobalStyle } from "styled-components";
import MyFont from "../fonts/Existence-Light-webfont.woff";
import MyFont2 from "../fonts/FiraCode-Regular.woff";

const GlobalStyle = createGlobalStyle` 

@font-face {
	font-family: MyFont;
	src: url('${MyFont}') format("woff");
}
@font-face {
	font-family: MyFont2;
	src: url('${MyFont2}') format("woff");
}
*,
*:before,
*:after {
	box-sizing: inherit;
}

* {
	font-family: MyFont2;
}
html {
	text-rendering: optimizeLegibility;
	overflow-x: hidden;
	box-sizing: border-box;
	-ms-overflow-style: scrollbar;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
html,
body {
	font-size: 1.1rem;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background: #f1f0eb;
}
a {
	color: black;
	text-decoration: none;
	font-family: 'MyFont2', Fallback, sans-serif;
}
p {
	font-family: 'MyFont2', Fallback, sans-serif;
	line-height: 1.6;
	margin-bottom: 2%;
	a {
		color: black;
		text-decoration: underline;
		text-decoration-color: rgb(30, 112, 191);
		font-family: 'MyFont2', Fallback, sans-serif;
		 :hover {
			text-decoration: none;
			color: #1e70bf;
		}
	}
}
ol, ul {
	margin: 1% 0% 2%;
}
li {
	font-family: 'MyFont2', Fallback, sans-serif;
	line-height:2em;
	a {
		color: black;
		text-decoration: underline;
		text-decoration-color: rgb(30, 112, 191);
		font-family: 'MyFont2', Fallback, sans-serif;
		 :hover {
			text-decoration: none;
			color: #1e70bf;
		}
	}
}

.software-links {
	text-align:left;
}

.software-links ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	margin: 2% 0%;
  }
  
 .software-links  li {
	float: left;

  }
  
  .software-links li a {
	display: block;
	color: white;
	text-align: center;
	padding: 2px;
	text-decoration: none;
  }

/* tables */
table {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
	overflow-x: auto;
	font-size: 1rem;
	margin: 2% 0%;
}
table td,
table th {
	border: 1px solid #ddd;
	padding: 8px;
}
table tr:nth-child(even) {
	background-color: #f2f2f2;
}
table tr:hover {
	background-color: #ddd;
}
table th {
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: left;
	background-color: #195d66;
	color: white;
}

.gatsby-resp-image-background-image {
	margin: 2% 0%;
}

i.icon.home.toolbar::before {
	display: block;
	transform: rotate(90deg);
}

i.icon.github.toolbar::before {
	display: block;
	transform: rotate(90deg);
	text-align: center;
	padding-left: .1rem;
}

/* Tooltip container */

.tooltip {
	position: relative;
	display: inline-block;
	border-bottom: 1px dotted black;
}

/* Tooltip text */

.tooltip .tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 6px;
	rotate: 90deg;
	translateX: -100%;
	/* Position the tooltip text - see examples below! */
	position: absolute;
	z-index: 1;
}


/* Show the tooltip text when you mouse over the tooltip container */

.tooltip:hover .tooltiptext {
	visibility: visible;
}

.logo img {
	display: block;
	margin: auto;
	background: rgb(227, 76, 57);
	background: linear-gradient(90deg, rgba(227, 76, 57, 1) 0%, rgba(227, 76, 57, 1) 51%, rgba(133, 205, 202, 1) 100%);
	border: 1px solid #662219;
	width:100%;
}

.pro-pic {
	background: #222;
	color: white;
}

.module-border-wrap {
	display: block;
	margin: auto;
	max-width: 255px;
	position: relative;
	background: linear-gradient(to right, #e34c39, #86cbc8);
	padding: 2px;
  }

.meta {
	padding: .8rem;
}

/* Position and sizing of burger button */

.bm-burger-button {
	position: fixed;
	background: #f1f0eb;
	width: 36px;
	height: 30px;
	right: 10px;
	top: 4px;
	@media screen and (max-width: 800px) {
		width: 32px;
		height: 24px;
		right: 16px;
		top: 10px;
	}
}

/* Color/shape of burger icon bars */

.bm-burger-bars {
	background: #662219;
}


/* Color/shape of burger icon bars on hover*/

.bm-burger-bars-hover {
	background: grey;
}


/* Position and sizing of clickable cross button */

.bm-cross-button {
	height: 64px;
	width: 64px;
}


/* Color/shape of close button cross */

.bm-cross {
	background: #bdc3c7;
}


/*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */

.bm-menu-wrap {
	position: fixed;
	height: 100%;
	top: 0;
}


/* General sidebar styles */

.bm-menu {
	background: #662219;
	padding: 2.5em 1.5em 0;
	font-size: 1.15em;
	text-align: center;
}

/* General sidebar styles */

.bm-menu a {
	color: white;
	font-size: xx-large;
}

/* Morph shape necessary with bubble or elastic */

.bm-morph-shape {
	fill: ;
}

/* Wrapper for item list */

.bm-item-list {
	color: #b8b7ad;
	padding: 0.8em;
	outline: none;
}

.bm-item-list img {
	display: block;
	margin: auto;
	padding-bottom: 4rem;
	outline: none;
	@media screen and (max-width: 800px) {
		width: 100%;
		margin-top: 4rem;
		outline: none;
	}
}


/* Individual item */

.bm-item {
	display: inline-block;
	margin-bottom: 4rem;
	padding: 1%;
	outline: none;
}

 :focus {
	outline: none;
}


/* Styling of overlay */

.bm-overlay {
	background: rgba(102, 34, 25, 0.1);
	top: 0;
}

.the-arrow {
	width: 1px;
	transition: all 0.2s;
}

.the-arrow.-left {
	position: absolute;
	top: 60%;
	left: 0;
}

.the-arrow.-left>.shaft {
	width: 0;
	background-color: #4c4c4c;
}

.the-arrow.-left>.shaft:before,
.the-arrow.-left>.shaft:after {
	width: 0;
	background-color: #4c4c4c;
}

.the-arrow.-left>.shaft:before {
	-webkit-transform: rotate(0);
	transform: rotate(0);
}

.the-arrow.-left>.shaft:after {
	-webkit-transform: rotate(0);
	transform: rotate(0);
}

.the-arrow.-right {
	top: 3px;
}

.the-arrow.-right>.shaft {
	width: 1px;
	transition-delay: 0.2s;
}

.the-arrow.-right>.shaft:before,
.the-arrow.-right>.shaft:after {
	width: 8px;
	transition-delay: 0.3s;
	transition: all 0.5s;
}

.the-arrow.-right>.shaft:before {
	-webkit-transform: rotate(40deg);
	transform: rotate(40deg);
}

.the-arrow.-right>.shaft:after {
	-webkit-transform: rotate(-40deg);
	transform: rotate(-40deg);
}

.the-arrow>.shaft {
	background-color: #4c4c4c;
	display: block;
	height: 1px;
	position: relative;
	transition: all 0.2s;
	transition-delay: 0;
	will-change: transform;
}

.the-arrow>.shaft:before,
.the-arrow>.shaft:after {
	background-color: #4c4c4c;
	content: '';
	display: block;
	height: 1px;
	position: absolute;
	top: 0;
	right: 0;
	transition: all 0.2s;
	transition-delay: 0;
}

.the-arrow>.shaft:before {
	-webkit-transform-origin: top right;
	transform-origin: top right;
}

.the-arrow>.shaft:after {
	-webkit-transform-origin: bottom right;
	transform-origin: bottom right;
}

.animated-arrow {
	display: inline-block;
	color: #4c4c4c;
	font-size: 1.25em;
	font-style: italic;
	text-decoration: none;
	position: relative;
	transition: all 0.2s;
}

.animated-arrow:hover {
	color: #808080;
}

.animated-arrow:hover>.the-arrow.-left>.shaft {
	width: 64px;
	transition-delay: 0.1s;
	background-color: #808080;
}

.animated-arrow:hover>.the-arrow.-left>.shaft:before,
.animated-arrow:hover>.the-arrow.-left>.shaft:after {
	width: 8px;
	transition-delay: 0.1s;
	background-color: #808080;
}

.animated-arrow:hover>.the-arrow.-left>.shaft:before {
	-webkit-transform: rotate(40deg);
	transform: rotate(40deg);
}

.animated-arrow:hover>.the-arrow.-left>.shaft:after {
	-webkit-transform: rotate(-40deg);
	transform: rotate(-40deg);
}

.animated-arrow:hover>.main {
	-webkit-transform: translateX(17px);
	transform: translateX(17px);
	-webkit-transform: translateX(80px);
	transform: translateX(80px);
}

.animated-arrow:hover>.main>.the-arrow.-right>.shaft {
	width: 0;
	-webkit-transform: translateX(200%);
	transform: translateX(200%);
	transition-delay: 0;
}

.animated-arrow:hover>.main>.the-arrow.-right>.shaft:before,
.animated-arrow:hover>.main>.the-arrow.-right>.shaft:after {
	width: 0;
	transition-delay: 0;
	transition: all 0.1s;
}

.animated-arrow:hover>.main>.the-arrow.-right>.shaft:before {
	-webkit-transform: rotate(0);
	transform: rotate(0);
}

.animated-arrow:hover>.main>.the-arrow.-right>.shaft:after {
	-webkit-transform: rotate(0);
	transform: rotate(0);
}

.animated-arrow>.main {
	display: flex;
	align-items: center;
	transition: all 0.2s;
}

.animated-arrow>.main>.text {
	margin: 0 16px 0 0;
	line-height: 1;
}

.animated-arrow>.main>.the-arrow {
	position: relative;
}

.lines {
	fill: #FFF;
	stroke: #FFF;
	stroke-miterlimit: 10;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-moz-keyframes fadeIn {
	0% {
		-moz-opacity: 0.0;
	}
	50% {
		-moz-opacity: 0.0;
	}
	100% {
		-moz-opacity: 1.0;
	}
}

.previous {
	float: right;
	font-size: 24px;
	font-family: 'MyFont', Fallback, sans-serif;
	color: #662219;
	margin: 1rem 0;
	padding: 8px 4px;
	font-weight: 600;
	 :after {
		content: " →";
		font-weight: bold;
		font-style: italic;
	}
	&:hover {
		color: white;
		background-color: #662219;
		padding: 8px 4px;
	}
}

.next {
	float: left;
	font-size: 24px;
	font-family: 'MyFont', Fallback, sans-serif;
	color: #662219;
	margin: 1rem 0;
	padding: 8px 4px;
	font-weight: 600;
	 :before {
		content: "← ";
		font-weight: bold;
		font-style: italic;
	}
	&:hover {
		color: white;
		background-color: #662219;
		padding: 8px 4px;
	}
}

footer {
	clear: both;
}

.container {
	display: flex;
	align-items: center;
}

.square {
	width: 100px;
	height: 100px;
	background: red;
}

.circle {
	width: 100px;
	height: 100px;
	background: red;
	border-radius: 50%;
}

.triangle {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
}

textarea {
	font-family: MyFont2;
}

/* [1] The container */
.img-hover-zoom {
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform .5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.5);
}

`;

export default GlobalStyle;

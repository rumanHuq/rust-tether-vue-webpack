#![windows_subsystem = "windows"]

//! A pretty silly task list example.
//!
//! Note that the name isn't actually used, because the app doesn't do anything
//! interesting with the data. An interesting extension would be to save the
//! list to a file on `suspend`, and I'm sure that you have ideas that are even
//! more interesting!

extern crate tether;

use std::fmt::Write;
use tether::{Handler, Window};

fn inline_script(s: &str) -> String {
	format!(r#"<script type="text/javascript">{}</script>"#, s)
}
fn inline_style(s: &str) -> String {
	format!(r#"<style type="text/css">{}</style>"#, s)
}

fn main() {
	let html = format!(r#"
		<!doctype html>
		<html>
			<head>
			<meta charset="utf-8">
  		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			{styles}
			</head>
			<body>
        <div id="app"></div>
				<!--[if lt IE 9]>
				<div class="ie-upgrade-container">
					<p class="ie-upgrade-message">Please, upgrade Internet Explorer to continue using this software.</p>
					<a class="ie-upgrade-link" target="_blank" href="https://www.microsoft.com/en-us/download/internet-explorer.aspx">Upgrade</a>
				</div>
				<![endif]-->
				<!--[if gte IE 9 | !IE ]> <!-->
				{scripts}
				<![endif]-->
			</body>
		</html>
		"#,
		styles = inline_style(include_str!("static/css/photon.css")),
		scripts = inline_script(include_str!("static/main.js")),
	);
	tether::builder().html(&html).handler(App::new()).start();
}

struct App {
	tasks: Vec<Task>,
}

impl App {
	fn new() -> Self {
		Self { tasks: Vec::new() }
	}
}

impl Handler for App {
	fn message(&mut self, win: Window, msg: &str) {
		println!("{}", msg);
	}
}

#[allow(dead_code)]
struct Task {
	name: String,
	done: bool,
}

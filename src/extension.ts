"use strict";

import * as vscode from "vscode";
import * as path from "path";
import * as toggler from "./toggler";
import * as terminal from "./terminal";

export function activate(context: vscode.ExtensionContext) {
  let toggleCommand = vscode.commands.registerCommand(
    "extension.railsTestHelper.toggle",
    () => toggler.toggle()
  );
  let runTestCommand = vscode.commands.registerCommand(
    "extension.railsTestHelper.runTest",
    () => terminal.runTest()
  );

  context.subscriptions.push(toggleCommand);
  context.subscriptions.push(runTestCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}

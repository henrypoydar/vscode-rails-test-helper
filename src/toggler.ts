"use strict";

import * as vscode from "vscode";

export function toggle() {

  // Get the current editor
  const activeEditor = vscode.window.activeTextEditor;

  // Abort if there is no editor available
  if (!activeEditor) {
    return vscode.window.showErrorMessage(
      "No file selected. Select either a code file or a test file."
    );
  }

  const currentFile = activeEditor.document.fileName;
  const reRubyFile = /\.rb$/;
  const reFileType = /_test\.rb$/;

  // Only works with Ruby files
  if (!reRubyFile.test(currentFile)) {
    return vscode.window.showErrorMessage(
      "Hrm. That doesn't seem to be a Ruby file."
    );
  }

  // Substitute
  const targetFile = reFileType.test(currentFile)
    ? currentFile.replace(/_test\.rb$/, ".rb").replace(/\/test\//, "/app/")
    : currentFile.replace(/\.rb$/, "_test.rb").replace(/\/app\//, "/test/");

  // Open target file
  return vscode.workspace
    .openTextDocument(targetFile)
    .then(
      document => vscode.window.showTextDocument(document),
      () =>
        vscode.window.showErrorMessage(
          `Target file ${targetFile} does not seem to exist.`
        )
    );
}

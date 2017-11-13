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
  const reValidFile = /\.(rb|js)$/;
  const reTestFile = /(_|\.)test\.(rb|js)$/;
  const reRubyFile = /\.rb$/;

  // Only works with Ruby or Javascript files
  if (!reValidFile.test(currentFile)) {
    return vscode.window.showErrorMessage(
      "Hrm. That doesn't seem to be a Ruby or Javascript file."
    );
  }

  // Substitute
  const extConvention = reRubyFile.test(currentFile) ? "_test" : ".test";
  const targetFile = reTestFile.test(currentFile)
    ? currentFile
        .replace(/(_|\.)test\.(rb|js)$/, ".$2")
        .replace(/\/test\//, "/app/")
    : currentFile
        .replace(/\.(rb|js)$/, `${extConvention}.$1`)
        .replace(/\/app\//, "/test/");

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

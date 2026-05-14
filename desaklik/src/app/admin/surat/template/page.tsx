"use client"

import * as React from "react"
import { TemplateHeader } from "./components/TemplateHeader"
import { TemplateEditor } from "./components/TemplateEditor"
import { TemplateVariables } from "./components/TemplateVariables"

export default function TemplateBuilderPage() {
  return (
    <div className="space-y-6">
      <TemplateHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <TemplateEditor />
        <TemplateVariables />
      </div>
    </div>
  )
}

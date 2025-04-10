import { Input } from './components/ui/input'

export function App() {
  return (
    <div className="p-6">
      <Input
        id="input"
        label="Label"
        placeholder="Placeholder"
        // errorMessage="Error message"
      />
    </div>
  )
}

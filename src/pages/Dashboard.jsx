import { useState } from 'react'
import Accordion from '../components/ui/Accordion'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'
import DateTimePicker from '../components/ui/DateTimePicker'
import FileUpload from '../components/ui/FileUpload'
import Modal from '../components/ui/Modal'
import ProgressBar from '../components/ui/ProgressBar'
import Radio from '../components/ui/Radio'
import Selection from '../components/ui/Selection'
import Switch from '../components/ui/Switch'
import Table from '../components/ui/Table'
import Tabs from '../components/ui/Tabs'
import Tag from '../components/ui/Tag'
import Textarea from '../components/ui/Textarea'
import Tooltip from '../components/ui/Tooltip'

export default function Dashboard() {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('default Message')
    const [isChecked, setIsChecked] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [selected, setSelected] = useState(false)
    const [files, setFiles] = useState([])
    const handleFileChange = (selectedFiles) => {
        setFiles(selectedFiles)
        console.log('Selected files:', selectedFiles)
    }
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [datetime, setDatetime] = useState('')
    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'orange', label: 'Orange' },
        { value: 'banana', label: 'Banana' },
    ]

    const [data, setData] = useState([
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' },
    ])

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name', editable: true },
        { key: 'email', label: 'Email', editable: true },
    ]

    const handleEdit = (updatedRow, index) => {
        const newData = [...data]
        newData[index] = updatedRow
        setData(newData)
    }

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index)
        setData(newData)
    }

    const handleAdd = (newRow) => {
        setData([...data, newRow])
    }

    const tabData = [
        {
            label: 'Home',
            color: '#4f46e5', // Indigo
            content: <p>Welcome to the Home tab!</p>,
        },
        {
            label: 'Profile',
            color: '#22c55e', // Green
            content: (
                <div>
                    <h3>User Profile</h3>
                    <p>Edit your profile details here.</p>
                    <Button variant="primary">Save Profile</Button>
                </div>
            ),
        },
        {
            label: 'Settings',
            color: '#f59e0b', // Orange
            content: (
                <div>
                    <h3>Settings</h3>
                    <p>Change your preferences.</p>
                </div>
            ),
        },
    ]
    const handleTabChange = (index) => {
        console.log('Active tab index:', index)
    }

    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <p>Welcome to the application dashboard.</p>
            <div style={{ padding: '20px' }}>
                <h1>Date/Time Picker</h1>

                <DateTimePicker
                    type="date"
                    label="Select Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <DateTimePicker
                    type="time"
                    label="Select Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />

                <DateTimePicker
                    type="datetime-local"
                    label="Select Date & Time"
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                />
            </div>
            <FileUpload
                multiple={true}
                accept="image/*,application/pdf"
                onChange={handleFileChange}
            />

            {files.length > 0 && (
                <div style={{ marginTop: '16px' }}>
                    <h2>Selected Files:</h2>
                    <ul>
                        {files.map((file, idx) => (
                            <li key={idx}>
                                {file.name} ({(file.size / 1024).toFixed(2)} KB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* 🔥 THIS WAS MISSING */}
            <Button onClick={() => setOpen(true)}>Open Modal</Button>

            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Create User"
                footer={
                    <>
                        <Button
                            variant="ghost"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button>Save</Button>
                    </>
                }
            >
                Your form goes here
            </Modal>
            <Tooltip text="Close modal">
                <button>Hover me</button>
            </Tooltip>
            {/* <Button disabled>
                <Spinner size="sm" />
                Loading...
            </Button> */}
            <ProgressBar
                value={80}
                variant="success"
            />
            <ProgressBar
                value={30}
                variant="danger"
            />
            {/* <ProgressBar indeterminate /> */}
            <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                rows={6}
                size="md"
            />
            <Checkbox
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                label="Accept terms and conditions"
            />
            <Radio
                name="gender"
                value="male"
                checked={selected === 'male'}
                onChange={() => setSelected('male')}
                label="Male"
            />

            <Radio
                name="gender"
                value="female"
                checked={selected === 'female'}
                onChange={() => setSelected('female')}
                label="Female"
            />
            <Switch
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
                size="md"
            />
            <div style={{ padding: '2rem' }}>
                <Selection
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    placeholder="Pick a fruit"
                />
            </div>
            <div style={{ padding: '2rem' }}>
                <Table
                    columns={columns}
                    data={data}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAdd={handleAdd}
                />
            </div>
            <div
                className="dashboard-page"
                style={{ padding: '2rem' }}
            >
                <h1>Dashboard Tabs</h1>
                <Tabs
                    tabs={tabData}
                    defaultActive={0}
                    onTabChange={handleTabChange}
                    rounded={true}
                />
            </div>
            <div
                style={{
                    padding: '2rem',
                    background: 'var(--surface)',
                    minHeight: '100vh',
                }}
            >
                <h2>Tags / Badges</h2>

                <div
                    style={{
                        display: 'flex',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                        marginTop: '1rem',
                    }}
                >
                    <Tag color="primary">Primary</Tag>
                    <Tag color="success">Success</Tag>
                    <Tag color="warning">Warning</Tag>
                    <Tag color="error">Error</Tag>
                    <Tag
                        color="secondary"
                        pill
                    >
                        Secondary Pill
                    </Tag>
                </div>
                <Badge count={9}></Badge>
                <Accordion
                    allowMultiple
                    shadow
                    items={[
                        {
                            title: 'Simple Section',
                            content: <div>Basic content</div>,
                        },
                        {
                            title: 'Interactive Section',
                            content: (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Button onClick={() => alert('Clicked!')}>
                                        Click Me
                                    </Button>

                                    <Button variant="secondary">
                                        Secondary
                                    </Button>

                                    <Selection
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        placeholder="Choose option"
                                    />
                                </div>
                            ),
                        },
                    ]}
                />
                <Badge count={5}>
                    <Button>Messages</Button>
                </Badge>
                <Badge count={3}>
                    <Tag color="primary">Primary</Tag>
                </Badge>
            </div>
        </div>
    )
}

import { useState } from 'react'
import Button from '../Button'
import './Table.css'

export default function Table({
    columns = [],
    data = [],
    onEdit = () => {},
    onDelete = () => {},
    onAdd = null,
    className = '',
}) {
    const [tableData, setTableData] = useState(data)
    const [editRow, setEditRow] = useState(null)
    const [editValue, setEditValue] = useState({})

    const handleEditClick = (rowIndex) => {
        setEditRow(rowIndex)
        setEditValue(tableData[rowIndex])
    }

    const handleSaveClick = (rowIndex) => {
        const newData = [...tableData]
        newData[rowIndex] = editValue
        setTableData(newData)
        onEdit(editValue, rowIndex)
        setEditRow(null)
        setEditValue({})
    }

    const handleInputChange = (e, key) => {
        setEditValue({ ...editValue, [key]: e.target.value })
    }

    const handleDelete = (rowIndex) => {
        const newData = tableData.filter((_, i) => i !== rowIndex)
        setTableData(newData)
        onDelete(rowIndex)
    }

    const handleAdd = () => {
        const newRow = columns.reduce(
            (acc, col) => ({ ...acc, [col.key]: '' }),
            {},
        )
        setTableData([...tableData, newRow])
        if (onAdd) onAdd(newRow)
    }

    return (
        <div className={`table-wrapper ${className}`}>
            <table className="custom-table">
                <thead className="custom-table-header">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                style={{ width: col.width || 'auto' }}
                            >
                                {col.label}
                            </th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={
                                rowIndex % 2 === 0 ? 'even-row' : 'odd-row'
                            }
                        >
                            {columns.map((col) => (
                                <td key={col.key}>
                                    {editRow === rowIndex && col.editable ? (
                                        <input
                                            type="text"
                                            value={editValue[col.key]}
                                            onChange={(e) =>
                                                handleInputChange(e, col.key)
                                            }
                                        />
                                    ) : (
                                        row[col.key]
                                    )}
                                </td>
                            ))}
                            <td className="table-actions">
                                {editRow === rowIndex ? (
                                    <>
                                        <Button
                                            size="sm"
                                            variant="primary"
                                            onClick={() =>
                                                handleSaveClick(rowIndex)
                                            }
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => setEditRow(null)}
                                        >
                                            Cancel
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() =>
                                                handleEditClick(rowIndex)
                                            }
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() =>
                                                handleDelete(rowIndex)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-add-row">
                {onAdd && (
                    <Button
                        size="sm"
                        variant="primary"
                        onClick={handleAdd}
                    >
                        Add Row
                    </Button>
                )}
            </div>
        </div>
    )
}

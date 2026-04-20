/**
 * Table Component
 * Props:
 *  - columns: array of strings, e.g. ['flightName', 'departureTime']
 *  - data: array of objects
 *  - renderCell: optional function for custom cell rendering
 *  - extraHeaderRow: optional array to render above normal headers
 *  - className: optional string for extra CSS classes
 */
export default function Table({
    columns = [],
    data = [],
    className = '',
    renderCell,
    extraHeaderRow,
}) {
    // Convert camelCase field names to readable labels
    const formatHeader = (text) =>
        text
            ?.replace(/([A-Z])/g, ' $1')
            ?.replace(/^./, (str) => str.toUpperCase())

    return (
        <div
            className={`table-wrapper glass ${className}`}
            style={{ overflowX: 'auto' }}
        >
            <table
                className="table"
                style={{ tableLayout: 'auto', width: '100%' }}
            >
                <thead>
                    {/* Optional extra header row */}
                    {extraHeaderRow && (
                        <tr>
                            {extraHeaderRow.map((val, idx) => (
                                <th
                                    key={idx}
                                    style={{
                                        whiteSpace: 'nowrap',
                                        textAlign:
                                            idx === 0 ? 'left' : 'center',
                                    }}
                                >
                                    {val}
                                </th>
                            ))}
                        </tr>
                    )}

                    {/* Main column headers */}
                    <tr>
                        {columns.map((col, idx) => (
                            <th
                                key={idx}
                                style={{
                                    whiteSpace: 'nowrap', // Prevent wrapping
                                    textAlign: idx === 0 ? 'left' : 'center', // First column left, others center
                                }}
                            >
                                {formatHeader(col)}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {/* Empty state */}
                    {data.length === 0 && (
                        <tr>
                            <td
                                colSpan={columns.length}
                                style={{ textAlign: 'center', padding: '1rem' }}
                            >
                                No data available
                            </td>
                        </tr>
                    )}

                    {/* Render table rows */}
                    {data.map((row, rIdx) => (
                        <tr key={rIdx}>
                            {columns.map((col, cIdx) => (
                                <td
                                    key={cIdx}
                                    style={{
                                        whiteSpace: 'nowrap', // prevent body cell wrap
                                        textAlign:
                                            cIdx === 0 ? 'left' : 'center',
                                        padding: '4px 8px',
                                    }}
                                >
                                    {renderCell
                                        ? renderCell(row[col], col, rIdx, cIdx)
                                        : row[col]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

import React from 'react';

function TableFooter({score}) {
    return (
        <tfoot className="TableFooter">
            <tr>
                <td>Total</td>
                <td colSpan="4">{score}</td>
            </tr>
        </tfoot>
    )
}

export default TableFooter;
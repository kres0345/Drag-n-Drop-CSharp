


/**
 * Swap dual pane windows.
 */
function dual_pane_swap(){

}

/**
 * @param {number} window1_width The target percentage of width for window 1. (Window 2 is set via window 1's width).
 * Sets where the dual pane splits, e.g. what width of each window is.
 */
function dual_pane_width(window1_width) {
    let window_1 = document.getElementsByClassName("window_1_dualPane")[0];
    let window_2 = document.getElementsByClassName("window_2_dualPane")[0];
    if (window_1 === undefined || window_2 === undefined || window1_width >= 90) {
        return;
    }

    window_1.style.width = window1_width;
    window_2.style.width = 100 - window1_width;
}
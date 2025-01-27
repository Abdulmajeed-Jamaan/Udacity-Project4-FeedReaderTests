/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeed Objects has url defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.trim().length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('allFeed Objects has name defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.trim().length).not.toBe(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden', function () {
            const body = document.querySelector('body');
            expect(body).toHaveClass('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu toggled normaly', function () {
            const body = document.querySelector('body');
            const menuButton = document.querySelector('.menu-icon-link');
            menuButton.click();
            expect(body).not.toHaveClass('menu-hidden');
            menuButton.click();
            expect(body).toHaveClass('menu-hidden');
        });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
        it('have at least one entry', function (done) {
            const container = document.querySelector('.feed');
            const entry = container.querySelectorAll('.entry');
            expect(entry.length).toBeGreaterThan(0);
            done();
        });

    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        it('The content actually changes when loading new conntent', function (done) {

            const container = document.querySelector('.feed');
            const currentNodes = container.innerHTML;
            loadFeed(3, function () {
                const newNodes = container.innerHTML;
                expect(currentNodes).not.toEqual(newNodes);
                done();
            });

        });

        //__________ reset the page feeds ____________
        afterAll(function () {
            loadFeed(0);
        });
    });


}());

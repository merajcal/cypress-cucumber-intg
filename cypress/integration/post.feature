Feature: Posts

    I want to post new article

    @smoke
    Scenario: Post new article
        Given I open Conduit login page
        When I type in
            | username              | password |
            | mmeraj@mailinator.com | admin123 |
        And I click on Sign in button
        And I click New Post button
        Then I see new post form

    Scenario: See my new post
        Given I open Conduit login page
        When I type in
            | username              | password |
            | mmeraj@mailinator.com | admin123 |
        And I click on Sign in button
        And I click Global Feed tab
        Then I see my post "Test post 2"
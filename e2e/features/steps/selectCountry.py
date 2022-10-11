import time

from behave import *
from selenium import webdriver
from selenium.webdriver.common.by import By

use_step_matcher("re")


@given("I am at Main Page")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    driver: webdriver.Chrome = context.browser
    driver.get('http://localhost:4200/')


@when("I select a country")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    driver: webdriver.Chrome = context.browser
    select = driver.find_element(By.TAG_NAME, 'p-dropdown')
    time.sleep(2)
    select.click()
    time.sleep(3)
    res = driver.find_element(By.ID, "Argentina")
    res.click()
    time.sleep(2)


@then('Submit button is enabled')
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    driver: webdriver.Chrome = context.browser
    res = driver.find_element(By.ID, "countryBtn")
    disabled = res.get_attribute('ng-reflect-disabled')
    time.sleep(1)
    assert disabled == 'false', disabled


@when("I clicked submit button")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    driver: webdriver.Chrome = context.browser
    res = driver.find_element(By.ID, "countryBtn")
    res.click()


@step("Statistics are shown")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    driver: webdriver.Chrome = context.browser
    time.sleep(3)
    res = driver.find_element(By.TAG_NAME, "app-covid-stats")
    assert res is not None

# html-validate-test
Simple HTML field validation by using only HTML's data attributes.


There are 3 data attributes to be used, if left any, they will just be ignored.

1) data-required

2) data-msg

3) data-pattern


Use data attribute as follows:

To mark the field as requred: data-required="true"

To mark the field as must follow certain pattern: data-pattern="<use regex pattern here>"

Example: If the data must be all digits: data-pattern="^[0-9]*$"

To display message when the data entered does not comply: data-msg="Please Enter Your Data!"

The message will be displayed using jGrowl notification.





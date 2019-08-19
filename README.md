# html-validate-test
Simple HTML field validation by using only HTML's data attributes.


There are 3 data attributes to be used, if left any, they will just be ignored.

1) data-required

2) data-msg

3) data-pattern


Use data attribute as follows:

To mark the field as requred: data-required="true"

To mark the field as must follow certain pattern: data-pattern="use regex pattern here"

Example: If the data must be all digits: data-pattern="^[0-9]*$"

To display message when the data entered does not comply: data-msg="Please Enter Your Data!"

The message will be displayed using jGrowl notification.

Example

```

<div class="form-group">
	<label>Name (* Required):</label> 
		<input data-required="true" data-msg="Please enter a name!" 
		type="text" class="form-control"
		name="name" value="" placeholder="Enter Name.">
</div>
<div class="form-group">
	<label>Email (* Required):</label> 
		<input data-required="true" data-pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
		data-msg="Please enter valid email address!" type="text"
		class="form-control" name="name2" value=""
		placeholder="Enter valid email address.">
</div>
<div class="form-group">
	<label>Other (Optional):</label> 
		<input type="text"
		class="form-control" name="name3" value=""
		placeholder="This is not required.">
</div>
<div class="form-group">
	<label>Some Digit (* Required):</label> 
		<input data-required="true" data-pattern="^\d*$"
		data-msg="Please enter number!" type="text" class="form-control"
		name="name" value="" placeholder="Enter Name.">
</div>



```





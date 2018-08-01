pragma solidity ^0.4.16;


contract SimpleContract {
    string value;
    
    function set(string x) public { 
        value = x;
    }
    
    function get() public view returns (string) { 
        return value; 
    }
}


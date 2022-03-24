import wget
import os
import sys

header = "\
  ___________________                           _______                  \n\
 /  _____/\_   _____/__________   ____  ____    \      \   ______  _  __ \n\
/   \  ___ |    __)/  _ \_  __ \_/ ___\/ __ \   /   |   \ /  _ \ \/ \/ / \n\
\    \_\  \|     \(  <_> )  | \/\  \__\  ___/  /    |    (  <_> )     /  \n\
 \______  /\___  / \____/|__|    \___  >___  > \____|__  /\____/ \/\_/   \n\
        \/     \/                    \/    \/          \/                \n"

def main():

    menu()

def menu():

    print (header)
    print ("version 0.1")

    choice = input("""
                      A: Generate DATA.JSON
                      Q: Quit/Log Out
                      Please enter your choice: """)

    if choice == "A" or choice =="a":
        get()
    elif choice=="Q" or choice=="q":
        sys.exit
    else:
        print("You must only select either A, B or Q.")
        print("Please try again")
        menu()

def get() :
    if not os.path.exists('public/gfnpc.json') :
        fs = wget.download(url='https://static.nvidiagrid.net/supported-public-game-list/locales/gfnpc-en-GB.json', out='public/gfnpc.json')

if __name__ == '__main__':
    main()
